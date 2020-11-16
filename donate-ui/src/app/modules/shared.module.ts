import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule.withConfig({ useColumnBasisZero: false })
  ],
  exports: [FlexLayoutModule, CommonModule]
})
export class SharedModule { }
