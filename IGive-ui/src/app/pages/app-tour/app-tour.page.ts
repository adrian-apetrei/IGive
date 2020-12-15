import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NotificationsService } from "src/app/services/notifications.service";

@Component({
  selector: "app-app-tour",
  templateUrl: "./app-tour.page.html",
  styleUrls: ["./app-tour.page.scss"],
})
export class AppTourPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
  };
  apptour;
  constructor(
    private router: Router,
    private notification: NotificationsService
  ) {}

  ngOnInit() {
    this.apptour = [
      "tour 1@2x",
      "tour 2@2x",
      "tour 3@2x",
      "tour 4@2x",
      "tour 5@2x",
      "tour 6@2x",
    ];
  }
  skipTour() {
    this.notification
      .presentAlertConfirm({
        message: "Are you sure you want to exit tour?",
      })
      .then((alert) => {
        alert.onDidDismiss().then((data) => {
          if (data.role === "confirm") {
            this.router.navigateByUrl("/tabs/home");
          }
        });
      });
  }
}
