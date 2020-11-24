import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { CharityOrganization } from "src/app/data/models";

@Component({
  selector: "app-determined",
  templateUrl: "./determined.component.html",
})
export class DeterminedComponent implements OnInit {
  charity: CharityOrganization = <any>{};
  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    this.storage.get("CHARITY").then((charity) => {
      this.charity = charity;
    });
  }

  back() {
    this.router.navigateByUrl("/tabs/donation-methods");
  }
}
