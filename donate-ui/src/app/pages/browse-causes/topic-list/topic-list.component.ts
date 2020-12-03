import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StaticDataService } from "src/app/services/static-data.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-topic-list",
  templateUrl: "./topic-list.component.html",
})
export class TopicListComponent implements OnInit {
  @Input() topic;
  @Input() charities = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: StaticDataService,
    private location: Location
  ) {}

  ngOnInit() {
    if (this.route.snapshot.data["topic"]) {
      this.topic = this.route.snapshot.data["topic"][0].topic;
      this.charities = this.route.snapshot.data["topic"];
    }
  }
  goToCharityDetails(charity) {
    this.dataService.setData(charity._id, charity);
    this.router.navigateByUrl(`tabs/charity-details/${charity._id}`);
  }

  goBack() {
    this.location.back();
  }
}
