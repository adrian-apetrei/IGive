import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications = {
    charityUpdates: '',
    email: false,
    sms: false
  }
  constructor(public activatedRoute: ActivatedRoute, public auth: AuthService) { }

  ngOnInit() {
    this.activatedRoute.paramMap
    .pipe(map(() => window.history.state)).subscribe(data => {
      console.log(data);
      Object.keys(this.notifications).forEach(key => {
        if(data.user.userSettings?.notifications){
          this.notifications[key] = data.user.userSettings.notifications[key];
        }
      });
    });
  }

  saveChanges() {
    this.auth.updateUserSettings({notifications: this.notifications}).subscribe();
  }
}
