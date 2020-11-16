import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { BehaviorSubject, from, Observable } from "rxjs";
import { map, switchMap, take } from "rxjs/operators";
import { Credentials, User } from "../data/models";
import { environment } from "./../../environments/environment";

const helper = new JwtHelperService();
export const TOKEN = "jwt-token";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private plt: Platform,
    private router: Router
  ) {
    this.loadStoredToken();
  }

  loadStoredToken() {
    const platformObs = from(this.plt.ready());

    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get(TOKEN));
      }),
      map((token) => {
        if (token) {
          const decoded = helper.decodeToken(token);
          this.userData.next(decoded);
          return true;
        } else {
          return null;
        }
      })
    );
  }

  login(credentials: Credentials) {
    return this.http.post(`${environment.apiUrl}/auth`, credentials).pipe(
      take(1),
      map((res: any) => {
        return res.token;
      }),
      switchMap((token) => {
        const decoded = helper.decodeToken(token);
        this.userData.next(decoded);

        const storageObs = from(this.storage.set(TOKEN, token));
        return storageObs;
      })
    );
  }

  register(credentials: Credentials) {
    return this.http.post(`${environment.apiUrl}/users`, credentials).pipe(
      take(1),
      switchMap((res) => {
        return this.login(credentials);
      })
    );
  }

  getUserToken() {
    return this.userData.getValue();
  }

  getUserData() {
    const id = this.getUserToken().id;
    return this.http
      .get<User>(`${environment.apiUrl}/users/${id}`)
      .pipe(take(1));
  }

  updateUser(id, data) {
    return this.http
      .put(`${environment.apiUrl}/users/${id}`, data)
      .pipe(take(1));
  }

  updateUserPreferences(data) {
    const id = this.getUserToken().id;
    console.log(id, data);
    return this.http
      .put(`${environment.apiUrl}/users/${id}`, data)
      .pipe(take(1));
  }

  removeUser(id) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`).pipe(take(1));
  }

  logout() {
    this.storage.remove(TOKEN).then(() => {
      this.router.navigateByUrl("/");
      this.userData.next(null);
    });
  }
}
