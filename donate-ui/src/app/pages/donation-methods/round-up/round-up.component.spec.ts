import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoundUpComponent } from './round-up.component';

describe('RoundUpComponent', () => {
  let component: RoundUpComponent;
  let fixture: ComponentFixture<RoundUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundUpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoundUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
