import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StaticDataService } from "src/app/services/static-data.service";

@Component({
  selector: "app-browse-causes",
  templateUrl: "./browse-causes.page.html",
})
export class BrowseCausesPage implements OnInit {
  charities;
  trending;
  topics;
  constructor(
    private staticDataService: StaticDataService,
    private router: Router,
    private dataService: StaticDataService
  ) {}

  ngOnInit() {
    this.staticDataService.getCharities().subscribe((charities) => {
      this.charities = charities;
      const trendingNow = this.charities.filter(
        (charity) =>
          charity.topic.toLowerCase() === "covid" ||
          charity.topic.toLowerCase() === "education"
      );
      this.trending = this.getTrending(trendingNow, 10);
    });
    this.staticDataService.getTopics().subscribe((topics) => {
      this.topics = topics;
    });
  }

  getTrending(items, nr: number) {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, nr);
  }

  filterByTopic(items, topic: string) {
    return items.filter(
      (item) => item.topic.toLowerCase().trim() === topic.toLowerCase().trim()
    );
  }

  goToTopicList(topic) {
    this.dataService.setData(
      topic.name,
      this.filterByTopic(this.charities, topic.name)
    );
    this.router.navigateByUrl(`/tabs/browse/topic/${topic.name}`);
  }
}
