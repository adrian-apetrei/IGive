import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { StaticDataService } from 'src/app/services/static-data.service';

@Component({
  selector: "app-topic-card",
  templateUrl: "./topic-card.component.html",
})
export class TopicCardComponent {
  @Input() topic;
  @Input() charities;

  constructor(private router: Router, private dataService: StaticDataService) {}

  goToCharityDetails(charity) {
    this.dataService.setData(charity._id, charity);
    this.router.navigateByUrl(`tabs/charity-details/${charity._id}`);
  }
}
