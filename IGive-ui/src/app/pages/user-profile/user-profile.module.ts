import { NgModule } from '@angular/core';
import { SharedModule } from './../../modules/shared.module';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile.page';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule
  ],
  declarations: [UserProfilePage, NotificationsComponent, ProfileComponent, PaymentInfoComponent]
})
export class UserProfilePageModule {}
