import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ReplaySubject } from "rxjs";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators";
import { StaticDataService } from "src/app/services/static-data.service";
import { FiltersPage } from "../filters/filters.page";

@Component({
  selector: "app-add-donation",
  templateUrl: "./add-donation.page.html",
})
export class AddDonationPage implements OnInit {
  charities = <any>[];
  data;
  term$ = new ReplaySubject<string>(1);
  applyFilters = false;

  constructor(
    private staticDataService: StaticDataService,
    public modalController: ModalController
  ) {}

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

  async presentModal() {
    this.applyFilters = false;
    const modal = await this.modalController.create({
      component: FiltersPage,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    let filteredCharities = [...this.charities];
    if (data.searchTerm) {
      filteredCharities = filteredCharities.filter((charity) =>
        charity.country
          .toLocaleLowerCase()
          .includes(data.searchTerm.toLocaleLowerCase())
      );
    }
    if (data.selectedTopics && data.selectedTopics.length !== 0) {
      filteredCharities = filteredCharities.filter((charity) =>
        data.selectedTopics.includes(charity.topic)
      );
    }

    if (filteredCharities.length < this.charities.length) {
      this.applyFilters = true;
    }

    this.mapData(filteredCharities);
  }

  clearFilters() {
    this.applyFilters = false;
    this.mapData(this.charities);
  }
}
