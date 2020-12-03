import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-round-up",
  templateUrl: "./round-up.component.html",
})
export class RoundUpComponent implements OnInit {
  date;
  method: "donate-goal" | "donate-date" | "donate-limit" = "donate-goal";

  constructor(private location: Location) {}

  ngOnInit() {}

  back() {
    this.location.back();
  }

  onChangeRoundUpMethod(e) {}
}
