import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/modules/shared.module";
import { FiltersPageModule } from "../filters/filters.module";

import { AddDonationPageRoutingModule } from "./add-donation-routing.module";

import { AddDonationPage } from "./add-donation.page";
import { TopicCardComponent } from "./topic-card/topic-card.component";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    IonicModule,
    AddDonationPageRoutingModule,
    FiltersPageModule,
  ],
  exports: [TopicCardComponent],
  declarations: [AddDonationPage, TopicCardComponent],
})
export class AddDonationPageModule {}
