import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/modules/shared.module';

import { CharityDetailsPageRoutingModule } from './charity-details-routing.module';

import { CharityDetailsPage } from './charity-details.page';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    IonicModule,
    CharityDetailsPageRoutingModule
  ],
  declarations: [CharityDetailsPage]
})
export class CharityDetailsPageModule {}
