import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs/operators";
import { CharityOrganization, Topic } from "../data/models";
import { environment } from "./../../environments/environment";
import { Storage } from "@ionic/storage";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class StaticDataService {
  data = [];
  private user = new BehaviorSubject<any>(null);
  userData = this.user.asObservable();

  constructor(private http: HttpClient, private storage: Storage) {}

  getTopics() {
    return this.http
      .get<Topic>(`${environment.apiUrl}/static-data/topics`)
      .pipe(take(1));
  }

  getCharities() {
    return this.http
      .get<CharityOrganization>(`${environment.apiUrl}/static-data/charities`)
      .pipe(take(1));
  }

  updateUserData(data: any) {
    this.user.next(data);
  }

  setData(id, data) {
    this.data[id] = data;
    this.storage.set(id, data);
  }

  getData(id) {
    return this.data[id];
  }

  getTransactions() {
    return [{
      "id": 1,
      "charity": "COVID-19 Solidarity",
      "transactionType": "United States",
      "transactionAmount": "$82.32",
      "donatedAmount": "$9.15",
      "date": "11/19/2020",
      "currency": "USD"
    }, {
      "id": 2,
      "charity": "COVID-19 Solidarity",
      "transactionType": "United States",
      "transactionAmount": "$83.14",
      "donatedAmount": "$2.04",
      "date": "6/16/2020",
      "currency": "USD"
    }, {
      "id": 3,
      "charity": "COVID-19 Solidarity",
      "transactionType": "United States",
      "transactionAmount": "$137.31",
      "donatedAmount": "$9.06",
      "date": "8/30/2020",
      "currency": "USD"
    }, {
      "id": 4,
      "charity": "COVID-19 Solidarity",
      "transactionType": "United States",
      "transactionAmount": "$34.15",
      "donatedAmount": "$3.81",
      "date": "3/25/2020",
      "currency": "USD"
    }, {
      "id": 5,
      "charity": "COVID-19 Solidarity",
      "transactionType": "United States",
      "transactionAmount": "$21.98",
      "donatedAmount": "$9.81",
      "date": "3/23/2020",
      "currency": "USD"
    }, {
      "id": 6,
      "charity": "UNESCO World Heritage",
      "transactionType": "United States",
      "transactionAmount": "$80.46",
      "donatedAmount": "$1.57",
      "date": "3/9/2020",
      "currency": "USD"
    }, {
      "id": 7,
      "charity": "UNESCO World Heritage",
      "transactionType": "United States",
      "transactionAmount": "$80.29",
      "donatedAmount": "$5.36",
      "date": "8/9/2020",
      "currency": "USD"
    }, {
      "id": 8,
      "charity": "UNESCO World Heritage",
      "transactionType": "United States",
      "transactionAmount": "$71.13",
      "donatedAmount": "$2.17",
      "date": "6/9/2020",
      "currency": "USD"
    }, {
      "id": 9,
      "charity": "UNESCO World Heritage",
      "transactionType": "United States",
      "transactionAmount": "$27.49",
      "donatedAmount": "$0.61",
      "date": "3/5/2020",
      "currency": "USD"
    }, {
      "id": 10,
      "charity": "UNESCO World Heritage",
      "transactionType": "United States",
      "transactionAmount": "$151.11",
      "donatedAmount": "$1.78",
      "date": "11/7/2020",
      "currency": "USD"
    }]
  }
}
