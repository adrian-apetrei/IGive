import { Component, OnInit } from "@angular/core";
import { CharityOrganization } from "src/app/data/models";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Component({
  selector: "app-charity-details",
  templateUrl: "./charity-details.page.html",
})
export class CharityDetailsPage implements OnInit {
  charity: CharityOrganization = <any>{};
  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    this.storage.get("CHARITY").then((charity) => {
      this.charity = charity;
    });
  }

  goToDonationMethods() {
    this.router.navigateByUrl("tabs/donation-methods");
  }
}
