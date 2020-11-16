import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonSlides } from "@ionic/angular";
import { StaticDataService } from "src/app/services/static-data.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-user-preferences",
  templateUrl: "./user-preferences.page.html",
  styleUrls: ["./user-preferences.page.scss"],
})
export class UserPreferencesPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
  };
  slideIndex = 0;
  topics;
  paymentMethod;
  goLocal = false;
  optimizeDonation = false;
  taxReturns = false;
  @ViewChild("preferencesSlides") slides: IonSlides;
  constructor(
    private router: Router,
    private staticDataService: StaticDataService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.staticDataService.getTopics().subscribe((topics) => {
      this.topics = topics;
    });
    this.paymentMethod = [
      { name: "Bank Account", icon: "graduate-cap", isSelected: false },
      { name: "PayPal", icon: "graduate-cap", isSelected: false },
      { name: "Other", icon: "graduate-cap", isSelected: false },
    ];
  }

  updateSlideIndex() {
    this.slides.getActiveIndex().then((val) => {
      this.slideIndex = val;
    });
  }

  swipeNext() {
    this.slides.slideNext();
  }

  swipeBack() {
    this.slides.slidePrev();
  }

  selectTopic(name: string) {
    this.topics.forEach((topic) => {
      if (topic.name === name) {
        topic.isSelected = !topic.isSelected;
      }
    });
  }

  selectPaymentMethod(name: string) {
    // save preferences then
    const selectedTopics = this.topics
      .filter((topic) => topic.isSelected)
      .map((topic) => {
        delete topic.isSelected;
        return topic;
      });
    this.authService.updateUserPreferences({
      selectedTopics,
      goLocal: this.goLocal,
      optimizeDonation: this.optimizeDonation,
      taxReturns: this.taxReturns,
    });

    // this.router.navigateByUrl(`/payment/${name.replace(" ", "")}`);
  }
}
