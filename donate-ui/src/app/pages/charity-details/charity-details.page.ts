import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CharityOrganization } from "src/app/data/models";
import { DonationService } from "src/app/services/donation.service";
import { StaticDataService } from "src/app/services/static-data.service";

@Component({
  selector: "app-charity-details",
  templateUrl: "./charity-details.page.html",
})
export class CharityDetailsPage implements OnInit {
  charity: CharityOrganization = <any>{};
  hasDonationMethod = false;
  donationMethodName: string;
  donatedAmount: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private donations: DonationService,
    private dataService: StaticDataService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.route.snapshot.data["charity"]) {
      this.charity = this.route.snapshot.data["charity"];
    }
    this.donations
      .getDonationMethods(this.charity._id)
      .subscribe((data: any) => {
        if (data.donationMethods.length) {
          this.hasDonationMethod = true;
          this.donationMethodName = data.donationMethods[0].donationMethod.toLowerCase();
        }
      });
    const transactions = this.dataService.getTransactions().filter((item) => {
      return item.charityId === this.charity._id;
    });
    if (transactions) {
      this.donatedAmount = transactions.reduce(
        (acc, val) => acc + Number(val.donatedAmount.substring(1)),
        0
      );
    }
  }

  goToDonationMethods() {
    this.router.navigateByUrl(`tabs/donation-methods/${this.charity._id}`);
  }

  goToDonationMethod() {
    this.router.navigateByUrl(
      `tabs/donation-methods/${this.charity._id}/${this.donationMethodName}`
    );
  }

  goToTransactionsList() {
    this.router.navigateByUrl(`tabs/transactions/${this.charity._id}`);
  }

  goToTaxForms() {
    this.router.navigateByUrl(`tabs/transactions/${this.charity._id}/taxforms`);
  }

  goBack() {
    this.location.back();
  }
}
