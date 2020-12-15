import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountComponent } from './bank-account/bank-account.component';

import { PaypalAccountComponent } from './paypal-account/paypal-account.component';

const routes: Routes = [
  {
    path: '',
    component: BankAccountComponent
  },
  {
    path: 'bank', // child route path
    component: BankAccountComponent, // child route component that the router renders
  },
  {
    path: 'paypal',
    component: PaypalAccountComponent, // another child route component that the router renders
  },
  {
    path: 'card',
    component: PaypalAccountComponent, // another child route component that the router renders
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPageRoutingModule {}
