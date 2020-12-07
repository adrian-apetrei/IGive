import { Component, OnInit } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { StaticDataService } from "src/app/services/static-data.service";

@Component({
  selector: "app-add-donation",
  templateUrl: "./add-donation.page.html",
})
export class AddDonationPage implements OnInit {
  charities = <any>[];
  data;
  term$ = new ReplaySubject<string>(1);

  constructor(private staticDataService: StaticDataService) {}

  ngOnInit() {
    this.staticDataService.getCharities().subscribe((charities) => {
      this.charities = charities;
      this.mapData(this.charities);
    });

    this.term$
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((query) => {
        const filteredCharities = this.charities.filter((charity) =>
          charity.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
        this.mapData(filteredCharities);
      });
  }

  mapData(charities) {
    this.data = {};
    charities.forEach((element) => {
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
