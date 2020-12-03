import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CharityOrganization } from "src/app/data/models";

@Component({
  selector: "app-charity-details",
  templateUrl: "./charity-details.page.html",
})
export class CharityDetailsPage implements OnInit {
  charity: CharityOrganization = <any>{};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    if (this.route.snapshot.data["charity"]) {
      this.charity = this.route.snapshot.data["charity"];
    }
  }

  goToDonationMethods() {
    this.router.navigateByUrl(`tabs/donation-methods/${this.charity._id}`);
  }

  goBack() {
    this.location.back();
  }
}
