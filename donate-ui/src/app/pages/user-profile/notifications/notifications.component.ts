import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"],
})
export class NotificationsComponent implements OnInit {
  notifications = {
    charityUpdates: "",
    email: false,
    sms: false,
  };
  userData;
  constructor(
    public activatedRoute: ActivatedRoute,
    public auth: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.auth.getUserData().subscribe((user) => {
      this.userData = user;
      this.notifications.email = user.userSettings?.notifications?.email;
      this.notifications.sms = user.userSettings?.notifications?.sms;
      this.notifications.charityUpdates =
        user.userSettings?.notifications?.charityUpdates;
    });
  }

  saveChanges() {
    this.auth
      .updateUserSettings({ notifications: this.notifications })
      .subscribe();
    this.router.navigateByUrl("tabs/profile");
  }
}
