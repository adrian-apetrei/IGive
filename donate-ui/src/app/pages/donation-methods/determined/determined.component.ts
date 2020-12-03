import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { CharityOrganization } from "src/app/data/models";
import { Location } from "@angular/common";

@Component({
  selector: "app-determined",
  templateUrl: "./determined.component.html",
})
export class DeterminedComponent implements OnInit {
  charity: CharityOrganization = <any>{};
  constructor(private storage: Storage, private location: Location) {}

  ngOnInit() {
    this.storage.get("CHARITY").then((charity) => {
      this.charity = charity;
    });
  }

  back() {
    this.location.back();
  }
}
