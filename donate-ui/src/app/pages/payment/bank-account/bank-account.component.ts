import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PaymentMethod } from "src/app/data/models";
import { AuthService } from "src/app/services/auth.service";
import { NotificationsService } from "src/app/services/notifications.service";

@Component({
  selector: "app-bank-account",
  templateUrl: "./bank-account.component.html",
})
export class BankAccountComponent implements OnInit {
  mode: "ADD" | "EDIT" = "ADD";
  paymentMethod;
  firstLogin = false;
  bankDetails: PaymentMethod = {
    userId: "",
    paymentMethod: "BANK_ACCOUNT",
    bankName: "",
    accountNumber: "",
    accessCode: "",
  };

  constructor(
    private auth: AuthService,
    private router: Router,
    public notifications: NotificationsService
  ) {}

  ngOnInit() {
    this.auth.getUserData().subscribe((data) => {
      this.firstLogin = data.firstLogin;
    });
    this.auth.getPaymentMethods().subscribe((data) => {
      if (
        data?.paymentMethods.length &&
        data.paymentMethods.some(
          (item) => item.paymentMethod === "BANK_ACCOUNT"
        )
      ) {
        this.paymentMethod = data.paymentMethods.filter(
          (item) => item.paymentMethod === "BANK_ACCOUNT"
        )[0];
        this.mode = "EDIT";
        this.bankDetails = { ...this.paymentMethod };
      }
    });
  }

  save() {
    if (this.mode === "ADD") {
      this.auth.addPaymentMethod(this.bankDetails).subscribe();
      if (this.firstLogin) {
        this.router.navigateByUrl(`/tabs/home`);
        this.auth.updateUser({ firstLogin: false }).subscribe();
      }
      this.router.navigateByUrl(`/tabs/profile`);
      this.notifications.show("Payment method successfully added");
    } else {
      this.auth
        .updatePaymentMethod(this.paymentMethod._id, this.bankDetails)
        .subscribe();
      this.router.navigateByUrl(`/tabs/profile`);
      this.notifications.show("Payment method successfully updated");
    }
  }
}
