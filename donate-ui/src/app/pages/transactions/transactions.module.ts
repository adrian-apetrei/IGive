import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TransactionsPageRoutingModule } from "./transactions-routing.module";

import { TransactionsPage } from "./transactions.page";
import { SharedModule } from "src/app/modules/shared.module";
import { TransactionsListComponent } from "./transactions-list/transactions-list.component";
import { TaxFormsComponent } from "./tax-forms/tax-forms.component";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    IonicModule,
    TransactionsPageRoutingModule,
  ],
  declarations: [
    TransactionsPage,
    TransactionsListComponent,
    TaxFormsComponent,
  ],
})
export class TransactionsPageModule {}
