import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltersPageRoutingModule } from './filters-routing.module';

import { FiltersPage } from './filters.page';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FiltersPageRoutingModule
  ],
  declarations: [FiltersPage]
})
export class FiltersPageModule {}
