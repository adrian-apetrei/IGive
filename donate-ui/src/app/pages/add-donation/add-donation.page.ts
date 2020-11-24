import { Component, OnInit } from "@angular/core";
import { StaticDataService } from "src/app/services/static-data.service";

@Component({
  selector: "app-add-donation",
  templateUrl: "./add-donation.page.html",
})
export class AddDonationPage implements OnInit {
  charities = <any>[];
  data;

  constructor(private staticDataService: StaticDataService) {}

  ngOnInit() {
    this.staticDataService.getCharities().subscribe((charities) => {
      this.charities = charities;
      this.mapData();
    });
  }

  mapData() {
    this.data = {};
    this.charities.forEach((element) => {
      const topic = element.topic;
      if (this.data[topic]) {
        this.data[topic].push(element);
      } else {
        this.data[topic] = [];
        this.data[topic].push(element);
      }
    });
  }
}
