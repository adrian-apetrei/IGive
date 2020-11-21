import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs/operators";
import { CharityOrganization, Topic } from "../data/models";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class StaticDataService {
  constructor(private http: HttpClient) {}

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
}
