import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { sortBy } from "lodash";
import { DonationService } from "src/app/services/donation.service";
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
    private donations: DonationService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.route.snapshot.data["charity"]) {
      this.charity = this.route.snapshot.data["charity"];
    }

    this.donations
      .getCharityDonationMethods(this.charity._id)
      .subscribe((donations) => {
        this.transactions = sortBy((donations as any).donationMethods, [
          "created_at",
        ]).filter((d) => !!d.paymentMethod.donationAmount);
        this.totalDonatedAmount = this.transactions.reduce(
          (acc, val) => acc + val.paymentMethod.donationAmount,
          0
        );
      });
  }

  back() {
    this.router.navigateByUrl(`tabs/charity-details/${this.charity._id}`);
  }
}
