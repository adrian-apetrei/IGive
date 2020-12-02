import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { DataResolverService } from "src/app/services/static-data-resolver.service";

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
        path: "charity-details/:id",
        resolve: {
          charity: DataResolverService,
        },
        loadChildren: () =>
          import("../charity-details/charity-details.module").then(
            (m) => m.CharityDetailsPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "donation-methods/:id",
        resolve: {
          charity: DataResolverService,
        },
        loadChildren: () =>
          import("../donation-methods/donation-methods.module").then(
            (m) => m.DonationMethodsPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../user-profile/user-profile.module").then(
            (m) => m.UserProfilePageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "browse",
        loadChildren: () =>
          import("../browse-causes/browse-causes.module").then(
            (m) => m.BrowseCausesPageModule
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
