import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';

import { UserProfilePage } from './user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfilePage
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'charity-settings',
    component: ProfileComponent
  },
  {
    path: 'info',
    component: ProfileComponent
  },
  {
    path: 'banking-info',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfilePageRoutingModule {}
