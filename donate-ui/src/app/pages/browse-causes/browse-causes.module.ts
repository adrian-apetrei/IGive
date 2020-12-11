import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/modules/shared.module";
import { AddDonationPageModule } from "../add-donation/add-donation.module";
import { BrowseCausesPageRoutingModule } from "./browse-causes-routing.module";
import { BrowseCausesPage } from "./browse-causes.page";
import { TopicListComponent } from "./topic-list/topic-list.component";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    AddDonationPageModule,
    IonicModule,
    BrowseCausesPageRoutingModule,
  ],
  declarations: [BrowseCausesPage, TopicListComponent],
})
export class BrowseCausesPageModule {}
