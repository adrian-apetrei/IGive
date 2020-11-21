import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { AutoLoginGuard } from "./guards/auto-login.guard";
// import { TabsPage } from "./pages/tabs/tabs.page";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
    canActivate: [AutoLoginGuard],
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
    canActivate: [AutoLoginGuard],
  },
  {
    path: "user-preferences",
    loadChildren: () =>
      import("./pages/user-preferences/user-preferences.module").then(
        (m) => m.UserPreferencesPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./pages/payment/payment.module").then((m) => m.PaymentPageModule),
  },
  {
    path: "",
    redirectTo: "register",
    pathMatch: "full",
    canActivate: [AutoLoginGuard],
  },
  {
    path: "tabs",
    loadChildren: "./pages/tabs/tabs.module#TabsPageModule",
  },  {
    path: 'add-donation',
    loadChildren: () => import('./pages/add-donation/add-donation.module').then( m => m.AddDonationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
