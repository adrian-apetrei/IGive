import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { StaticDataService } from "src/app/services/static-data.service";
import { DonationService } from "src/app/services/donation.service";
import { CharityOrganization } from "src/app/data/models";

@Component({
  selector: "app-round-up",
  templateUrl: "./round-up.component.html",
})
export class RoundUpComponent implements OnInit {
  charity: CharityOrganization = <any>{};
  date;
  amount;
  method: "donate-goal" | "donate-date" | "donate-limit" = "donate-goal";

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: StaticDataService,
    private donationService: DonationService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params["id"]) {
      this.charity = this.dataService.getData(this.route.snapshot.params["id"]);
    }
    this.donationService
      .getCharityDonationMethods(this.charity._id)
      .subscribe((data: any) => {
        if (data.donationMethods.length) {
          const roundUpMethod = data.donationMethods[0].paymentMethod;
          this.amount = roundUpMethod.donationLimit;
          this.date = roundUpMethod.donationDate;
          this.method = roundUpMethod.donateUntilGoal
            ? "donate-goal"
            : roundUpMethod.donateUntilDate
            ? "donate-date"
            : "donate-limit";
        }
      });
  }

  back() {
    this.location.back();
  }

  pay() {
    const donationMethod = {
      charityId: this.charity._id,
      donationMethod: "ROUND_UP",
      paymentMethod: {
        donateUntilGoal: this.method === "donate-goal",
        donateUntilDate: this.method === "donate-date",
        donateUntilLimit: this.method === "donate-limit",
        donationDate: this.method === "donate-date" ? this.date : null,
        donationLimit: this.method === "donate-limit" ? this.amount : null,
      },
    };
    this.donationService.addDonationMethod(donationMethod).subscribe(() => {
      this.router.navigateByUrl(
        `/tabs/donation-methods/${this.charity._id}/notification`
      );
    });
  }
}
