import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.page.html",
  styleUrls: ["./user-profile.page.scss"],
})
export class UserProfilePage implements OnInit {
  user;
  avatar: string;
  fullName: string;
  settings;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.currentUser.subscribe(data => {
      this.auth.getUserData().subscribe((user) => {
        this.avatar = user.avatar;
        this.user = user;
        if (user.lastName || user.firstName) {
          this.fullName = `${user.firstName} ${user.lastName}`;
        }
      });
    });
    this.settings = [
      { name: "Notifications", icon: "", route: 'notifications' },
      { name: "Charity Settings", icon: "", route: 'charity-settings' },
      { name: "Banking Information", icon: "", route: 'banking-info' },
    ];
  }

  goTo(route) {
    this.router.navigateByUrl(`/profile/${route}`, { state: { user: this.user } });
  }

  logout() {
    this.auth.logout();
  }
}
