import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonSlides } from "@ionic/angular";
import { StaticDataService } from "src/app/services/static-data.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-user-preferences",
  templateUrl: "./user-preferences.page.html",
})
export class UserPreferencesPage implements OnInit {
  @Input() initialSlide = 0;
  slideOpts = {
    initialSlide: this.initialSlide,
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
      { name: "bank", icon: "bank", isSelected: false },
      { name: "paypal", icon: "paypal", isSelected: false },
      { name: "card", icon: "credit-card", isSelected: false },
    ];
  }

  updateSlideIndex() {
    this.slides.getActiveIndex().then((val) => {
      this.slideIndex = val;
    });
  }

  selectTopic(name: string) {
    this.topics.forEach((topic) => {
      if (topic.name === name) {
        topic.isSelected = !topic.isSelected;
      }
    });
  }

  selectPaymentMethod(name: string) {
    const selectedTopics = this.topics
      .filter((topic) => topic.isSelected)
      .map((topic) => {
        delete topic.isSelected;
        return topic;
      });
    this.authService
      .updateUserPreferences({
        selectedTopics,
        goLocal: this.goLocal,
        optimizeDonations: this.optimizeDonation,
        taxReturns: this.taxReturns,
      })
      .subscribe();
    this.router.navigateByUrl(`/payment/${name.replace(" ", "")}`);
  }
}
