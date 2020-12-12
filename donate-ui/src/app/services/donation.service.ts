import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs/operators";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DonationService {
  constructor(private http: HttpClient) {}

  addDonationMethod(data) {
    return this.http.post(`${environment.apiUrl}/donation`, data).pipe(take(1));
  }

  getCharityDonationMethods(charityId) {
    return this.http
      .get(`${environment.apiUrl}/donation/methods/${charityId}`)
      .pipe(take(1));
  }

  getDonationMethods() {
    return this.http
      .get(`${environment.apiUrl}/donation/methods`)
      .pipe(take(1));
  }

  addPayment(data) {
    return this.http
      .post(`${environment.apiUrl}/payment/pay`, data)
      .pipe(take(1));
  }
}
