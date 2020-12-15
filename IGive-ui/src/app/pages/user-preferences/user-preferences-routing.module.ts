import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPreferencesPage } from './user-preferences.page';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: UserPreferencesPage
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPreferencesPageRoutingModule {}
