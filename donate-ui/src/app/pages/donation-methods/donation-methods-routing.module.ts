import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DeterminedComponent } from "./determined/determined.component";

import { DonationMethodsPage } from "./donation-methods.page";
import { IncognitoComponent } from "./incognito/incognito.component";
import { RoundUpComponent } from "./round-up/round-up.component";

const routes: Routes = [
  {
    path: "",
    component: DonationMethodsPage,
  },
  {
    path: "round-up",
    component: RoundUpComponent,
  },
  {
    path: "incognito",
    component: IncognitoComponent,
  },
  {
    path: "determined",
    component: DeterminedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationMethodsPageRoutingModule {}
