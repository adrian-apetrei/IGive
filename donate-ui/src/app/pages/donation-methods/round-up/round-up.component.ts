import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-round-up",
  templateUrl: "./round-up.component.html",
  styleUrls: ["./round-up.component.scss"],
})
export class RoundUpComponent implements OnInit {
  date;
  constructor(private router: Router) {}

  ngOnInit() {}

  back() {
    this.router.navigateByUrl("/tabs/donation-methods");
  }
}
