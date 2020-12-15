import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { DonationMethodsPage } from "./donation-methods.page";

describe("DonationMethodPage", () => {
  let component: DonationMethodsPage;
  let fixture: ComponentFixture<DonationMethodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DonationMethodsPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DonationMethodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
