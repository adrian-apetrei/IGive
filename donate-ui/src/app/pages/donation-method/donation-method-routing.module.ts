import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationMethodPage } from './donation-method.page';

const routes: Routes = [
  {
    path: '',
    component: DonationMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationMethodPageRoutingModule {}
