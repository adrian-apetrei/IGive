import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/modules/shared.module';
import { UserPreferencesPageRoutingModule } from './user-preferences-routing.module';
import { UserPreferencesPage } from './user-preferences.page';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    IonicModule,
    UserPreferencesPageRoutingModule
  ],
  declarations: [UserPreferencesPage]
})
export class UserPreferencesPageModule {}
