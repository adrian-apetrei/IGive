import { Component, OnInit } from "@angular/core";
import { CharityOrganization } from "src/app/data/models";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Component({
  selector: "app-charity-details",
  templateUrl: "./charity-details.page.html",
  styleUrls: ["./charity-details.page.scss"],
})
export class CharityDetailsPage implements OnInit {
  charity: CharityOrganization = <any>{};

  charityUpdates = [
    {
      title: "$500 raised!",
      message:
        "Thanks to your generosity, we’ve reaised $500 in just 3 days! If we keep this up we’ll hit our goal by next week  With $500, we can buy 62 books that will help encourage reading for students at Clara Brenton PS",
      date: "1604973060000",
    },
    {
      title: "$100 raised!",
      message: "The first milestone, $100! Thank you so much!",
      date: "1604843460000",
    },
  ];

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    this.storage.get("CHARITY").then((charity) => {
      this.charity = charity;
    });
  }

  goToDonationMethods() {
    this.router.navigateByUrl("tabs/donation-method");
  }
}
