import { Component, OnInit } from "@angular/core";
import { CharityOrganization } from "src/app/data/models";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { StaticDataService } from "src/app/services/static-data.service";
import { DonationService } from "src/app/services/donation.service";

@Component({
  selector: "app-determined",
  templateUrl: "./determined.component.html",
})
export class DeterminedComponent implements OnInit {
  charity: CharityOrganization = <any>{};
  amount: number;
  period = "month";

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
          const determinedData = data.donationMethods[0].paymentMethod;
          this.amount = determinedData.donationAmount;
          this.period = determinedData.period;
        }
      });
  }

  back() {
    this.location.back();
  }

  pay() {
    const donationMethod = {
      charityId: this.charity._id,
      donationMethod: "DETERMINED",
      paymentMethod: {
        donationAmount: this.amount,
        period: this.period,
      },
    };
    this.donationService.addDonationMethod(donationMethod).subscribe();
    this.donationService
      .addPayment({
        amount: this.amount,
        description: `Donate to ${this.charity.name}`,
      })
      .subscribe((response: any) => {
        window.open(response.data.connect_url, "_system");
        setTimeout(() => {
          this.router.navigateByUrl(
            `/tabs/donation-methods/${this.charity._id}/notification`
          );
        }, 1000);
      });
  }
}
