import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StaticDataService } from 'src/app/services/static-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any = {
    displayName: '',
    email: '',
    avatar: ''
  };
  password = '';
  userData;

  constructor(public activatedRoute: ActivatedRoute, public auth: AuthService, public data: StaticDataService) {}

  ngOnInit() {
    this.auth.getUserData().subscribe(user => {
      this.user.email = user.email;
      this.user.displayName = user.displayName;
      this.user.avatar = user.avatar;
      this.userData = user;
    });
  }

  saveChanges() {
    this.data.updateUserData(this.user);
    if (this.password){
      this.user.password = this.password;
    }
    this.auth.updateUser(this.user).subscribe();
  }
}
