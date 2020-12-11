import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { sortBy } from "lodash";
import { StaticDataService } from "src/app/services/static-data.service";
@Component({
  selector: "app-transactions-list",
  templateUrl: "./transactions-list.component.html",
  styleUrls: ["./transactions-list.component.scss"],
})
export class TransactionsListComponent implements OnInit {
  charity;
  totalDonatedAmount: number;
  transactions = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: StaticDataService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.data["charity"]) {
      this.charity = this.route.snapshot.data["charity"];
    }

    this.transactions = sortBy(
      this.dataService
        .getTransactions()
        .filter((t) => t.charityName === this.charity.name),
      ["date"]
    );
    this.totalDonatedAmount = this.transactions.reduce(
      (acc, val) => acc + Number(val.donatedAmount.substring(1)),
      0
    );
  }

  back() {
    this.router.navigateByUrl(`tabs/charity-details/${this.charity._id}`);
  }
}
