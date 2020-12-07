import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CharityOrganization } from "src/app/data/models";
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: "app-charity-details",
  templateUrl: "./charity-details.page.html",
})
export class CharityDetailsPage implements OnInit {
  charity: CharityOrganization = <any>{};
  hasDonationMethod = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private donations: DonationService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.data["charity"]) {
      this.charity = this.route.snapshot.data["charity"];
    }
    this.donations.getDonationMethods(this.charity._id).subscribe((data: any) => {
      if (data.donationMethods.length) {
        this.hasDonationMethod = true;
      }
    });
  }

  goToDonationMethods() {
    this.router.navigateByUrl(`tabs/donation-methods/${this.charity._id}`);
  }

  goBack() {
    this.location.back();
  }
}
