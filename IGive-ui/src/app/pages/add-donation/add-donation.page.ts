import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ReplaySubject } from "rxjs";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators";
import { StaticDataService } from "src/app/services/static-data.service";
import { FiltersPage } from "../filters/filters.page";
import { TOPICS, DISPLAYED_TOPICS } from "./topics-initial-data";
@Component({
  selector: "app-add-donation",
  templateUrl: "./add-donation.page.html",
})
export class AddDonationPage implements OnInit {
  charities = <any>[];
  data;
  term$ = new ReplaySubject<string>(1);
  applyFilters = false;
  filteredCharities;
  filters = { searchByName: "", searchByCountry: "", searchByTopic: [] };

  topics = TOPICS;
  displayedTopics = DISPLAYED_TOPICS;

  constructor(
    private staticDataService: StaticDataService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.staticDataService.getCharities().subscribe((charities) => {
      this.charities = charities;
      this.filteredCharities = charities;
      this.mapData(this.charities);
    });

    this.term$
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((query) => {
        this.filters = { ...this.filters, searchByName: query };
        this.applyFiltersMethod();
      });
  }

  mapData(charities) {
    this.data = {};
    charities.forEach((element) => {
      const topic = this.topics[element.topic];
      if (this.data[topic]) {
        this.data[topic].push(element);
      } else {
        this.data[topic] = [];
        this.data[topic].push(element);
      }
    });

    //sort by order field (important for covid charities order)
    Object.keys(this.data).forEach((key) => {
      this.data[key].sort((a, b) => {
        return a.order - b.order;
      });
    });
  }

  async presentModal() {
    this.applyFilters = false;
    const modal = await this.modalController.create({
      component: FiltersPage,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data.searchTerm) {
      this.applyFilters = true;
      this.filters = { ...this.filters, searchByCountry: data.searchTerm };
    }
    if (data.selectedTopics) {
      this.applyFilters = true;
      this.filters = { ...this.filters, searchByTopic: data.selectedTopics };
      this.applyFiltersMethod();
    }
  }

  clearFilters() {
    this.filters = { searchByName: "", searchByCountry: "", searchByTopic: [] };
    this.applyFilters = false;
    this.applyFiltersMethod();
  }

  applyFiltersMethod() {
    this.filteredCharities = [...this.charities];
    // search by name
    if (this.filters.searchByName) {
      this.filteredCharities = this.filteredCharities.filter((charity) =>
        charity.name
          .toLocaleLowerCase()
          .includes(this.filters.searchByName.toLocaleLowerCase())
      );
    }
    // search by country
    if (this.filters.searchByCountry) {
      this.filteredCharities = this.filteredCharities.filter((charity) =>
        charity.country
          .toLocaleLowerCase()
          .includes(this.filters.searchByCountry.toLocaleLowerCase())
      );
    }
    // search by topic
    if (this.filters.searchByTopic && this.filters.searchByTopic.length !== 0) {
      this.filteredCharities = this.filteredCharities.filter((charity) =>
        this.filters.searchByTopic.includes(charity.topic.toLocaleLowerCase())
      );
    }
    this.mapData(this.filteredCharities);
  }
}
