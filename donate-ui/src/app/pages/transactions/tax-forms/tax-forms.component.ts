import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-tax-forms",
  templateUrl: "./tax-forms.component.html",
  styleUrls: ["./tax-forms.component.scss"],
})
export class TaxFormsComponent implements OnInit {
  charity;
  taxForms = [];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.data["charity"]) {
      this.charity = this.route.snapshot.data["charity"];
    }
    this.charity.taxFormDesc = `${
      this.charity.name
    } is a registered charity ${Math.floor(
      Math.random() * 1000000000
    )} RR${Math.floor(
      Math.random() * 100000
    )} They provide tax forms at the beginning of the calendar year, usually in the first two weeks on January for donations made in the previous calendar year.`;
  }

  back() {
    this.router.navigateByUrl(`tabs/charity-details/${this.charity._id}`);
  }
}
