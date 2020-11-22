import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { DonationMethodsPageRoutingModule } from "./donation-methods-routing.module";
import { DonationMethodsPage } from "./donation-methods.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationMethodsPageRoutingModule,
  ],
  declarations: [DonationMethodsPage],
})
export class DonationMethodsPageModule {}
