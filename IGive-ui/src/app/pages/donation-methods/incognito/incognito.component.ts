import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CharityOrganization } from "src/app/data/models";
import { Location } from "@angular/common";
import { DonationService } from "src/app/services/donation.service";
import { StaticDataService } from "src/app/services/static-data.service";

@Component({
  selector: "app-incognito",
  templateUrl: "./incognito.component.html",
})
export class IncognitoComponent implements OnInit {
  charity: CharityOrganization = <any>{};

  amount: number;
  when: string;
  donationLimit: string;
  period = "month";

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private donationService: DonationService,
    private dataService: StaticDataService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params["id"]) {
      this.charity = this.dataService.getData(this.route.snapshot.params["id"]);
    }
    this.donationService
      .getCharityDonationMethods(this.charity._id)
      .subscribe((data: any) => {
        if (data.donationMethods.length) {
          const incognitoData = data.donationMethods[0].paymentMethod;
          this.amount = incognitoData.donationAmount;
          this.when = incognitoData.when;
          this.donationLimit = incognitoData.donationLimit;
          this.period = incognitoData.period;
        }
      });
  }

  back() {
    this.location.back();
  }

  pay() {
    const donationMethod = {
      charityId: this.charity._id,
      donationMethod: "INCOGNITO",
      paymentMethod: {
        donationAmount: this.amount,
        when: this.when,
        donationLimit: this.donationLimit,
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
