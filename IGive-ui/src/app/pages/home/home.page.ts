import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { StaticDataService } from "src/app/services/static-data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
})
export class HomePage implements OnInit, OnDestroy {
  charities;
  currentUser: any;
  subscriptions: Subscription[] = [];

  constructor(
    private staticDataService: StaticDataService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.staticDataService.getCharities().subscribe((charities) => {
        this.charities = charities;
        this.charities.sort((a, b) => {
          if (a.topic < b.topic) {
            return -1;
          } else if (a.topic > b.topic) {
            return 1;
          } else return 0;
        });
        const index = this.charities.findIndex(
          (el) => el.name === "PM-CARES Fund"
        );
        this.charities.splice(index, 1);
      }),
      this.authService.currentUser.subscribe((user) => {
        this.currentUser = user;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
