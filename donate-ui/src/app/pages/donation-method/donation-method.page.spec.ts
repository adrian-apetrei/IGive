import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonationMethodPage } from './donation-method.page';

describe('DonationMethodPage', () => {
  let component: DonationMethodPage;
  let fixture: ComponentFixture<DonationMethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationMethodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonationMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
