import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.page.html',
  styleUrls: ['./user-preferences.page.scss'],
})
export class UserPreferencesPage implements OnInit {
  slideOpts = {
    initialSlide: 0
  };
  slideIndex = 0;
  topics;
  paymentMethod;
  @ViewChild('preferencesSlides') slides: IonSlides;
  constructor(private router: Router) { }

  ngOnInit() {
    this.topics = [
      { name: 'Education', icon: 'graduate-cap', isSelected: false },
      { name: 'Medical Aid', icon: 'ambulance-side-view', isSelected: false },
      { name: 'Environment', icon: 'earth-globe', isSelected: false },
      { name: 'Wildlife', icon: 'paw', isSelected: false },
      { name: 'Cultural Relics' , icon: 'castle', isSelected: false },
      { name: 'COVID', icon: 'first-aid-kit', isSelected: false },
      { name: 'Disabilities', icon: 'walking-stick', isSelected: false },
      { name: 'LGBT', icon: 'lgbtq', isSelected: false },
      { name: 'Women and Kids', icon: 'happy-children', isSelected: false },
      { name: 'Disaster', icon: 'home-disaster', isSelected: false }
    ];
    this.paymentMethod = [
      { name: 'Bank Account', icon: 'graduate-cap', isSelected: false },
      { name: 'PayPal', icon: 'graduate-cap', isSelected: false },
      { name: 'Other', icon: 'graduate-cap', isSelected: false }
    ];
  }

  updateSlideIndex() {
    this.slides.getActiveIndex().then(val => {
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
    this.topics.forEach(topic => {
      if (topic.name === name){
        topic.isSelected = !topic.isSelected;
      }
    });
  }

  selectPaymentMethod(name: string) {
    // save preferences then
    this.router.navigateByUrl(`/payment/${name.replace(' ', '')}`);
  }
}
