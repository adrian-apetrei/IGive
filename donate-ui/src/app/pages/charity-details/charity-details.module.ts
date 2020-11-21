import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharityDetailsPageRoutingModule } from './charity-details-routing.module';

import { CharityDetailsPage } from './charity-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharityDetailsPageRoutingModule
  ],
  declarations: [CharityDetailsPage]
})
export class CharityDetailsPageModule {}
