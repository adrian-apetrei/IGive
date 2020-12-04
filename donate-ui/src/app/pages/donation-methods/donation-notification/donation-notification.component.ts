import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { StaticDataService } from "src/app/services/static-data.service";
import { CharityOrganization } from "src/app/data/models";

@Component({
  selector: "app-donation-notification",
  templateUrl: "./donation-notification.component.html",
})
export class DonationNotificationComponent implements OnInit {
  charity: CharityOrganization = <any>{};

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private dataService: StaticDataService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params["id"]) {
      this.charity = this.dataService.getData(this.route.snapshot.params["id"]);
    }
  }
}
