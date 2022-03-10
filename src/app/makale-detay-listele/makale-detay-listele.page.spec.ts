import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakaleDetayListelePage } from './makale-detay-listele.page';

describe('MakaleDetayListelePage', () => {
  let component: MakaleDetayListelePage;
  let fixture: ComponentFixture<MakaleDetayListelePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MakaleDetayListelePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakaleDetayListelePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
