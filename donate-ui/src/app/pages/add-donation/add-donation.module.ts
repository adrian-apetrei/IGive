import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddDonationPageRoutingModule } from "./add-donation-routing.module";

import { AddDonationPage } from "./add-donation.page";
import { TopicCardComponent } from './topic-card/topic-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDonationPageRoutingModule,
  ],
  declarations: [AddDonationPage, TopicCardComponent],
})
export class AddDonationPageModule {}
