import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowseCausesPage } from './browse-causes.page';

describe('BrowseCausesPage', () => {
  let component: BrowseCausesPage;
  let fixture: ComponentFixture<BrowseCausesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCausesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseCausesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
