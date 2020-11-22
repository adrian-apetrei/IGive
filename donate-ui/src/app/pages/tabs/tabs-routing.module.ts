import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: "../home/home.module#HomePageModule",
        canActivate: [AuthGuard],
      },
      {
        path: "register-donation",
        loadChildren:
          "../add-donation/add-donation.module#AddDonationPageModule",
        canActivate: [AuthGuard],
      },
      {
        path: "add-donation",
        loadChildren: () =>
          import("../add-donation/add-donation.module").then(
            (m) => m.AddDonationPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "charity-details",
        loadChildren: () =>
          import("../charity-details/charity-details.module").then(
            (m) => m.CharityDetailsPageModule
          ),
      },
      {
        path: "donation-method",
        loadChildren: () =>
          import("../donation-method/donation-method.module").then(
            (m) => m.DonationMethodPageModule
          ),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../user-profile/user-profile.module").then(
            (m) => m.UserProfilePageModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
