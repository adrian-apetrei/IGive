import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: ''
  };
  state$: Observable<object>;

  constructor(public activatedRoute: ActivatedRoute, public auth: AuthService) {}

  ngOnInit() {
    this.activatedRoute.paramMap
    .pipe(map(() => window.history.state)).subscribe(data => {
      Object.keys(this.user).forEach(key => { this.user[key] = data.user[key]; });
    });
  }

  saveChanges() {
    this.auth.updateUser(this.user).subscribe();
  }
}
