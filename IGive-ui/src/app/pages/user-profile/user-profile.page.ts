import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { StaticDataService } from 'src/app/services/static-data.service';

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.page.html",
  styleUrls: ["./user-profile.page.scss"],
})
export class UserProfilePage implements OnInit {
  avatar: string;
  displayName: string;
  settings;
  constructor(private auth: AuthService, private router: Router, public data: StaticDataService) {}

  ngOnInit() {
    this.auth.getUserData().subscribe(user => {
      this.data.updateUserData(user);
      this.avatar = user.avatar;
      this.displayName = user.displayName;
    });
    this.data.userData.subscribe(user => {
      if (user){
        this.avatar = user.avatar;
        this.displayName = user.displayName;
      }
    });
    this.settings = [
      { name: "Notifications", icon: "", route: "notifications" },
      { name: "Payment Information", icon: "", route: "payment-info" },
    ];
  }

  goTo(route) {
    this.router.navigateByUrl(`tabs/profile/${route}`);
  }

  logout() {
    this.auth.logout();
  }
}
