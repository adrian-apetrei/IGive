import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { DonationMethodsPageRoutingModule } from "./donation-methods-routing.module";
import { DonationMethodsPage } from "./donation-methods.page";
import { SharedModule } from "src/app/modules/shared.module";
import { RoundUpComponent } from "./round-up/round-up.component";
import { IncognitoComponent } from "./incognito/incognito.component";
import { DeterminedComponent } from "./determined/determined.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    IonicModule,
    DonationMethodsPageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    DonationMethodsPage,
    RoundUpComponent,
    IncognitoComponent,
    DeterminedComponent,
  ],
})
export class DonationMethodsPageModule {}
