import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KategoriEkleGuncellePage } from './kategori-ekle-guncelle.page';

describe('KategoriEkleGuncellePage', () => {
  let component: KategoriEkleGuncellePage;
  let fixture: ComponentFixture<KategoriEkleGuncellePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriEkleGuncellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KategoriEkleGuncellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
