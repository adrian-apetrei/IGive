import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CharityOrganization } from "src/app/data/models";

@Component({
  selector: "app-donation-method",
  templateUrl: "./donation-methods.page.html",
})
export class DonationMethodsPage implements OnInit {
  charity: CharityOrganization = <any>{};
  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.route.snapshot.data["charity"]) {
      this.charity = this.route.snapshot.data["charity"];
    }
  }

  goToRoundUpMethod() {
    this.router.navigateByUrl(`/tabs/donation-methods/${this.charity._id}/round_up`);
  }

  goToIncognitopMethod() {
    this.router.navigateByUrl(
      `/tabs/donation-methods/${this.charity._id}/incognito`
    );
  }

  goToDeterminedMethod() {
    this.router.navigateByUrl(`/tabs/donation-methods/${this.charity._id}/determined`);
  }

  goBack() {
    this.location.back();
  }
}
