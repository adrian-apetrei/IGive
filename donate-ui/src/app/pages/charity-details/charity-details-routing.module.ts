import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharityDetailsPage } from './charity-details.page';

const routes: Routes = [
  {
    path: '',
    component: CharityDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharityDetailsPageRoutingModule {}
