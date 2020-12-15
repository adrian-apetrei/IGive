import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StaticDataService } from "src/app/services/static-data.service";
import { Location } from "@angular/common";
import { ReplaySubject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-topic-list",
  templateUrl: "./topic-list.component.html",
})
export class TopicListComponent implements OnInit {
  @Input() topic;
  @Input() charities = [];

  term$ = new ReplaySubject<string>(1);

  data;

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

    this.data = this.charities;

    this.term$
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((query) => {
        this.charities = this.data.filter((charity) =>
          charity.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
      });
  }
  goToCharityDetails(charity) {
    this.dataService.setData(charity._id, charity);
    this.router.navigateByUrl(`tabs/charity-details/${charity._id}`);
  }

  goBack() {
    this.location.back();
  }
}
