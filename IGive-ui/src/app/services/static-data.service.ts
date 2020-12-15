import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs/operators";
import { CharityOrganization, Topic } from "../data/models";
import { environment } from "./../../environments/environment";
import { Storage } from "@ionic/storage";
import { BehaviorSubject } from "rxjs";

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
    return this.data[id] || this.storage.get(id);
  }
}
