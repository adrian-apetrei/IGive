import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationMethodPageRoutingModule } from './donation-method-routing.module';

import { DonationMethodPage } from './donation-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationMethodPageRoutingModule
  ],
  declarations: [DonationMethodPage]
})
export class DonationMethodPageModule {}
