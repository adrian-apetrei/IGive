import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentMethod } from 'src/app/data/models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-paypal-account',
  templateUrl: './paypal-account.component.html',
  styleUrls: ['./paypal-account.component.scss'],
})
export class PaypalAccountComponent implements OnInit {
  paypalDetails: PaymentMethod = {
    userId: '',
    paymentMethod: 'PAYPAL',
    bankName: '',
    accountNumber: '',
    accessCode: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  save() {
    this.auth.addPaymentMethod(this.paypalDetails).subscribe();
    this.router.navigateByUrl(`/home`);
  }
}
