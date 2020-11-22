import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-donation-method",
  templateUrl: "./donation-methods.page.html",
  styleUrls: ["./donation-methods.page.scss"],
})
export class DonationMethodsPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToRoundUpMethod() {
    this.router.navigateByUrl(`/tabs/donation-methods/round-up`);
  }

  goToIncognitopMethod() {
    this.router.navigateByUrl(`/tabs/donation-methods/incognito`);
  }

  goToDeterminedMethod() {
    this.router.navigateByUrl(`/tabs/donation-methods/determined`);
  }
}
