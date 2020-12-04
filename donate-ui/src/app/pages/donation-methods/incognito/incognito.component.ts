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
  }

  back() {
    this.location.back();
  }

  pay() {
    // TODO: update mock data (userId)
    const donationMethod = {
      charityId: this.charity._id,
      donationMethod: "INCOGNITO",
      incognitoMethod: {
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
          this.router.navigateByUrl(`/tabs/home`);
        }, 1000);
      });
  }
}
