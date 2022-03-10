import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';
import { Router,ActivatedRoute } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Location } from '@angular/common';

@Component({
  selector: 'app-makale-ekle-guncelle',
  templateUrl: './makale-ekle-guncelle.page.html',
  styleUrls: ['./makale-ekle-guncelle.page.scss'],
})
export class MakaleEkleGuncellePage implements OnInit {

  constructor(public router: Router,public activatedRoute: ActivatedRoute,public _location : Location, public bllOrtak: BllOrtakProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }
  sayfaListesiModel = [];
  makaleListesi=[]; 
  makaleBilgisi = 
  {
    ID:-1,
    Mak_Baslik:"",
    Mak_Icerik:"",
    Mak_Tarih: new Date(),
    Mak_Yazar:-1, 
    Kat_ID:-1
  }
  kullaniciListesi = [];
  aranan="";
  kategoriListesi=[];
  editorValueType="";
  valueContent="";

  ngOnInit() {
    this.MakaleAra().then(a => {
      this.MakaleBilgisiGetir().then(b => {
   
      });
    });
   this.kullaniciListesiGet();
   this.kategorilerMethod();
   this.makalelerMethod();
  }



  kullaniciListesiGet()
  {
    var formData = new FormData();
    formData.append("user","");
    this.bllOrtak.httpPost(formData, "Kullanici", "KullaniciAra").then(a => {
      const sonuc = <any>a;
      this.kullaniciListesi = sonuc.SonucJSON;

    })
  }
  kategorilerMethod() {
    var formData = new FormData();
    formData.append("kat", this.aranan);
    this.bllOrtak.httpPost(formData, "Kategori", "KategoriAra").then(a => {
      var sonuc = <any>a;
      this.kategoriListesi = sonuc.SonucJSON;

    }) 
  }
 
  async MakaleBilgisiGetir() {
    return new Promise((res, err) => {
      this.activatedRoute.queryParams.subscribe(param => {
        if (param != null) {
          const formData = new FormData();
          formData.append('ID', param.ID.toString());
          console.log("idddddd:",param.ID);
          this.bllOrtak.httpPost(formData,"Makale","MakaleKartGetirID").then(a => {
            const sonuc = (a as any);
            this.makaleBilgisi = sonuc.SonucJSON;
            console.log("mesajın burda",this.makaleBilgisi);
         
            res(1);
          }).catch(x => {
            console.log(x);
            err();
          });
        }
      });
    });
  }
  makalelerMethod() {
    var formData = new FormData();
    formData.append("mak", this.aranan);
    this.bllOrtak.httpPost(formData, "Makale", "MakaleAraView").then(a => {
      var sonuc = <any>a;
      this.makaleListesi = sonuc.SonucJSON;

    }) 
  } 

  async MakaleAra() {
    return new Promise((res, err) => {
      const formData = new FormData();
      formData.append('mak', ' ');
      this.bllOrtak.httpPost(formData,"Makale","MakaleAra").then(a => {
        const sonuc = (a as any);
        this.sayfaListesiModel = sonuc.SonucJSON;
        console.log("sayfaListesiModel",this.sayfaListesiModel);
        res(1);
      }).catch(x => {
        console.log(x);
        err();
      }); 
    });
  }


  async makaleKaydet() {
    this.makaleKaydetMethod().then(a => {
      notify('İşlem Başarılı !', 'warning', 600);
      this._location.back();
      this.makalelerMethod()
    }).catch(x => {
      if (x == -99) {
        notify('Kullanıcı adı veya eposta adresini daha önce girmişsiniz', 'danger', 6000);
      }
      console.log(x);
    });
  }

  async makaleKaydetMethod() {
    return new Promise((res, err) => {
      const formData = new FormData();
      formData.append('mak_json', JSON.stringify(this.makaleBilgisi));
      this.bllOrtak.httpPost(formData,"Makale","MakaleEkleGuncelle").then(a => {
        const sonuc = a as any;
        if (sonuc.SonucJSON.ID > 0) {
          this.makaleBilgisi = sonuc.SonucJSON;
          res(1);
        }
        else if (sonuc.ID == -99) {
          err(-99);
        }
        else{
          err(-999);
        }

      });
    }).catch(x => {
      console.log(x);
    });
  }

  kapat() {
    this._location.back();
  }
}
