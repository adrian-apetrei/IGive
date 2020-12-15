import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataResolverService } from "src/app/services/static-data-resolver.service";
import { TaxFormsComponent } from "./tax-forms/tax-forms.component";
import { TransactionsListComponent } from "./transactions-list/transactions-list.component";

import { TransactionsPage } from "./transactions.page";

const routes: Routes = [
  {
    path: "",
    component: TransactionsPage,
  },
  {
    path: ":id",
    resolve: {
      charity: DataResolverService,
    },
    component: TransactionsListComponent,
  },
  {
    path: ":id/taxforms",
    resolve: {
      charity: DataResolverService,
    },
    component: TaxFormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsPageRoutingModule {}
