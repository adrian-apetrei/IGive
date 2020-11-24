import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-round-up",
  templateUrl: "./round-up.component.html",
})
export class RoundUpComponent implements OnInit {
  date;
  method: "donate-goal" | "donate-date" | "donate-limit" = "donate-goal";

  constructor(private router: Router) {}

  ngOnInit() {}

  back() {
    this.router.navigateByUrl("/tabs/donation-methods");
  }

  onChangeRoundUpMethod(e) {}
}
