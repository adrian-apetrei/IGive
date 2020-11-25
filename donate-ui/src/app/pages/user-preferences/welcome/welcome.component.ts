import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
})
export class WelcomeComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  getStarted() {
    this.router.navigateByUrl(`/user-preferences`);
  }
}
