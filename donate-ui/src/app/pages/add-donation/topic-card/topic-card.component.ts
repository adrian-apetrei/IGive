import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { from } from "rxjs";
@Component({
  selector: "app-topic-card",
  templateUrl: "./topic-card.component.html",
  styleUrls: ["./topic-card.component.scss"],
})
export class TopicCardComponent {
  @Input() topic;
  @Input() charities;

  constructor(private router: Router, private storage: Storage) {}

  goToCharityDetails(charity) {
    this.storage.set("CHARITY", charity).then(() => {
      this.router.navigateByUrl("tabs/charity-details");
    });
  }
}
