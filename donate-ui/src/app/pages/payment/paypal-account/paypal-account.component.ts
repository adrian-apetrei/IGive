import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PaymentMethod } from "src/app/data/models";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-paypal-account",
  templateUrl: "./paypal-account.component.html",
})
export class PaypalAccountComponent implements OnInit {
  mode: 'ADD' | 'EDIT' = 'ADD';
  paymentMethod;
  firstLogin = false;
  paypalDetails: PaymentMethod = {
    userId: "",
    paymentMethod: "PAYPAL",
    bankName: "",
    accountNumber: "",
    accessCode: "",
  };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.getPaymentMethods().subscribe(data => {
      if (data?.paymentMethods.length && data.paymentMethods.some(item => item.paymentMethod === 'PAYPAL')) {
        this.paymentMethod = data.paymentMethods.filter(item => item.paymentMethod === 'PAYPAL')[0];
        this.mode = 'EDIT';
        this.paypalDetails = { ...this.paymentMethod };
      } else {
          this.firstLogin = true;
      }
    });
  }

  save() {
    if (this.mode === 'ADD') {
      this.auth.addPaymentMethod(this.paypalDetails).subscribe();
      if (this.firstLogin) {
        this.router.navigateByUrl(`/tabs/home`);
      }
    } else {
      this.auth.updatePaymentMethod(this.paymentMethod._id , this.paypalDetails).subscribe();
    }
  }
}
