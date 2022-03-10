import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';
import { Router,ActivatedRoute } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Location } from '@angular/common';


@Component({
  selector: 'app-kategori-ekle-guncelle',
  templateUrl: './kategori-ekle-guncelle.page.html',
  styleUrls: ['./kategori-ekle-guncelle.page.scss'],
})
export class KategoriEkleGuncellePage implements OnInit {

  
  constructor(public router: Router,public activatedRoute: ActivatedRoute,public _location : Location, public bllOrtak: BllOrtakProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }
  sayfaListesiModel = [];

  kategoriBilgisi = 
  {
    ID:-1,
    Kat_Adi:"",
    Kat_Aciklama:"",
    MedyaYolu:""
  }
  
  aranan="";
  kategoriListesi=[];
  ngOnInit() {
    this.KategoriAra().then(a => {
      this.KategoriBilgisiGetir().then(b => {
       
      });
    });
   


  }




 
  async KategoriBilgisiGetir() {
    return new Promise((res, err) => {
      this.activatedRoute.queryParams.subscribe(param => {
        if (param != null) {
          const formData = new FormData();
          formData.append('ID', param.ID.toString());
          console.log("idddddd:",param.ID);
          this.bllOrtak.httpPost(formData,"Kategori","KategoriGetirID").then(a => {
            const sonuc = (a as any);
            this.kategoriBilgisi = sonuc.SonucJSON;
         console.log("mesajın burda",this.kategoriBilgisi);
            res(1);
          }).catch(x => {
            console.log(x);
            err();
          });
        }
      });
    });
  }
 

  async KategoriAra() {
    return new Promise((res, err) => {
      const formData = new FormData();
      formData.append('kat', ' ');
      this.bllOrtak.httpPost(formData,"Kategori","KategoriAra").then(a => {
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


  async kategoriKaydet() {
    this.kategoriKaydetMethod().then(a => {
      notify('İşlem Başarılı !', 'warning', 600);
      this._location.back();
     
    }).catch(x => {
      if (x == -99) {
        notify('Kullanıcı adı veya eposta adresini daha önce girmişsiniz', 'danger', 6000);
      }
      console.log(x);
    });
  }

  async kategoriKaydetMethod() {
    return new Promise((res, err) => {
      const formData = new FormData();
      formData.append('kat_json', JSON.stringify(this.kategoriBilgisi));
      this.bllOrtak.httpPost(formData,"Makale","MakaleEkleGuncelle").then(a => {
        const sonuc = a as any;
        if (sonuc.SonucJSON.ID > 0) {
          this.kategoriBilgisi = sonuc.SonucJSON;
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
