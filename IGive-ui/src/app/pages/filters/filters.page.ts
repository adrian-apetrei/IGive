import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { StaticDataService } from "src/app/services/static-data.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.page.html",
})
export class FiltersPage implements OnInit {
  searchTerm = "";
  topics;
  selectedTopics = [];

  constructor(
    public modalController: ModalController,
    public staticDataService: StaticDataService
  ) {}

  ngOnInit() {
    this.staticDataService.getTopics().subscribe((topics) => {
      this.topics = topics;
      this.topics.push(
        { name: "only show cases where my money is matched" },
        { name: "only show registered charities" }
      );
    });
  }

  dismiss() {
    this.modalController.dismiss({
      selectedTopics: this.selectedTopics,
      searchTerm: this.searchTerm,
    });
  }

  toggle(e) {
    const value = e.source.ariaLabel;
    if (e.checked) {
      this.selectedTopics.push(value.toLocaleLowerCase());
    } else {
      const index = this.selectedTopics.indexOf(value.toLocaleLowerCase());
      if (index > -1) {
        this.selectedTopics.splice(index, 1);
      }
    }
  }
}
