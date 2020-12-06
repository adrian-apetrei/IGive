import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss'],
})
export class PaymentInfoComponent implements OnInit {
  hasBank = false;
  hasPaypal = false;
  hasCard = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.getPaymentMethods().subscribe(data => {
      console.log('Data', data);
      if (data?.paymentMethods.length) {
        this.hasBank = !!data.paymentMethods.some(item => item.paymentMethod === 'BANK_ACCOUNT');
        this.hasPaypal = !!data.paymentMethods.some(item => item.paymentMethod === 'PAYPAL');
        this.hasCard = !!data.paymentMethods.some(item => item.paymentMethod === 'OTHER');
      }
    });
  }

  goToBankDetails() {
    this.router.navigateByUrl('/payment/bank');
  }
  goToPaypalDetails() {
    this.router.navigateByUrl('/payment/paypal');
  }
}
