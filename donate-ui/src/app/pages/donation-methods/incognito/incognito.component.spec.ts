import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncognitoComponent } from './incognito.component';

describe('IncognitoComponent', () => {
  let component: IncognitoComponent;
  let fixture: ComponentFixture<IncognitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncognitoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncognitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
