import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakaleEkleGuncellePage } from './makale-ekle-guncelle.page';

describe('MakaleEkleGuncellePage', () => {
  let component: MakaleEkleGuncellePage;
  let fixture: ComponentFixture<MakaleEkleGuncellePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MakaleEkleGuncellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakaleEkleGuncellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
