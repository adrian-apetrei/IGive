import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppTourPage } from './app-tour.page';

describe('AppTourPage', () => {
  let component: AppTourPage;
  let fixture: ComponentFixture<AppTourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppTourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
