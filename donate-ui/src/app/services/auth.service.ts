import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { BehaviorSubject, from, Observable } from "rxjs";
import { map, switchMap, take } from "rxjs/operators";
import { Credentials, PaymentMethod, User } from "../data/models";
import { environment } from "./../../environments/environment";

const helper = new JwtHelperService();
export const TOKEN = "jwt-token";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);
  private token = new BehaviorSubject(null);
  public currentUser: Observable<User>;

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
          this.token.next(token);
          this.currentUser = this.userData.asObservable();
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
        this.currentUser = this.userData.asObservable();

        const storageObs = from([this.storage.set(TOKEN, token)]);
        return storageObs;
      })
    );
  }

  register(credentials: Credentials) {
    return this.http
      .post(`${environment.apiUrl}/users`, { ...credentials, firstLogin: true })
      .pipe(
        take(1),
        switchMap((res) => {
          return this.login(credentials);
        })
      );
  }

  getToken() {
    return this.token.getValue();
  }

  getUserToken() {
    return this.userData.getValue();
  }

  getUserData() {
    const id = this.getUserToken()?.id;
    return this.http
      .get<User>(`${environment.apiUrl}/users/${id}`)
      .pipe(take(1));
  }

  updateUser(data) {
    const id = this.getUserToken().id;
    return this.http
      .put(`${environment.apiUrl}/users/${id}`, data)
      .pipe(take(1));
  }

  updateUserPreferences(data) {
    const id = this.getUserToken().id;
    return this.http
      .put(`${environment.apiUrl}/users/preferences/${id}`, data)
      .pipe(take(1));
  }

  updateUserSettings(data) {
    const id = this.getUserToken().id;
    return this.http
      .put(`${environment.apiUrl}/users/settings/${id}`, data)
      .pipe(take(1));
  }

  addPaymentMethod(data: PaymentMethod) {
    data.userId = this.getUserToken().id;
    return this.http
      .post<PaymentMethod>(`${environment.apiUrl}/payment`, data)
      .pipe(take(1));
  }

  updatePaymentMethod(id, data) {
    return this.http
      .put(`${environment.apiUrl}/payment/update/${id}`, data)
      .pipe(take(1));
  }

  getPaymentMethods() {
    return this.http
      .get<any>(`${environment.apiUrl}/payment/methods`)
      .pipe(take(1));
  }

  removeUser(id) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`).pipe(take(1));
  }

  logout() {
    this.storage.remove(TOKEN).then(() => {
      this.router.navigateByUrl("/login");
      this.userData.next(null);
    });
  }
}
