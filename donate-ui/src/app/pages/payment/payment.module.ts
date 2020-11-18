import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/modules/shared.module';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { PaymentPageRoutingModule } from './payment-routing.module';
import { PaypalAccountComponent } from './paypal-account/paypal-account.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule
  ],
  declarations: [BankAccountComponent, PaypalAccountComponent]
})
export class PaymentPageModule {}
