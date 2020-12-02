import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CharityOrganization } from "src/app/data/models";
import { Location } from "@angular/common";
import { DonationService } from "src/app/services/donation.service";

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
    private router: Router
  ) {}

  ngOnInit() {
    // if (this.route.snapshot.data["charity"]) {
    //   this.charity = this.route.snapshot.data["charity"];
    // }
  }

  back() {
    this.location.back();
  }

  pay() {
    // TODO: update mock data (userId, charityId)
    const donationMethod = {
      userId: "1",
      charityId: "1",
      donationMethod: "INCOGNITO",
      incognitoMethod: {
        donationAmount: this.amount,
        when: this.when,
        donationLimit: this.donationLimit,
        period: this.period,
      },
    };
    this.donationService.addDonationMethod(donationMethod).subscribe();
    this.donationService.addPayment().subscribe((response: any) => {
      window.open(response.data.connect_url, "_system");
    });
  }
}
