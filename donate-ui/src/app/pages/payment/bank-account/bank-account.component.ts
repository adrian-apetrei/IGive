import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentMethod } from 'src/app/data/models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {
  bankDetails: PaymentMethod = {
    userId: '',
    paymentMethod: 'BANK_ACCOUNT',
    bankName: '',
    accountNumber: '',
    accessCode: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  save() {
    this.auth.addPaymentMethod(this.bankDetails).subscribe();
    this.router.navigateByUrl(`/tabs/home`);
  }
}
