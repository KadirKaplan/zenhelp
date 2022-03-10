import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';
import { Router,ActivatedRoute } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Location } from '@angular/common';
@Component({
  selector: 'app-makale-detay-listele',
  templateUrl: './makale-detay-listele.page.html',
  styleUrls: ['./makale-detay-listele.page.scss'],
})
export class MakaleDetayListelePage implements OnInit {
  makaleBilgiListesi = [];
  aranan="";


  constructor(public router: Router,public activatedRoute: ActivatedRoute,public _location : Location, public bllOrtak: BllOrtakProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.MakaleAra().then(a => {
      this.MakaleBilgisiGetir().then(b => {

      });
    });
  }
  makaleListesi=[];
// makelebilgisi 
// =
// {
//   ID:-1,
//       KategoriID:-1,
//       MakaleBaslik:"",
//       MakaleIcerik:"",
//       MakaleTarih:"",
//     KategoriAdi:"",
//     KullaniciAdi:""

//}
// makaleBilgisi = {
//       ID:-1,
//       Mak_Baslik:"",
//       Mak_Icerik:"",
//       Mak_Tarih:"",
//       Mak_Yazar:"",
//       Kat_ID:-1
// }
makaleAraKeyPress(e) {
  if (e.keyCode == 13) {
    this.makaleAra();
  }


}
go(makale)
{
    this.router.navigateByUrl('/makale-oku?ID=' + makale.ID);
    console.log("makale id : ", makale.ID);
}
  async MakaleBilgisiGetir() {
    return new Promise((res, err) => {
      this.activatedRoute.queryParams.subscribe(param => {
        if (param != null) {
          const formData = new FormData(); 
          formData.append('ID', param.ID.toString());
          this.bllOrtak.httpPost(formData,"Makale","MakaleGetirID").then(a => {
            const sonuc = (a as any);
            this.makaleBilgiListesi = sonuc.SonucJSON;
            console.log("makale bilgisi : ",this.makaleBilgiListesi);
            
            res(1);
          }).catch(x => {
            console.log(x);
            err();
          });
        }
      });
    });
  }
  async MakaleAra() {
    return new Promise((res, err) => {
      const formData = new FormData();
      formData.append('mak', ' ');
      this.bllOrtak.httpPost(formData,"Makale","MakaleAra").then(a => {
        const sonuc = (a as any);
        this.makaleBilgiListesi = sonuc.SonucJSON;
        console.log("sayfaListesiModel",this.makaleBilgiListesi);
        res(1);
      }).catch(x => {
        console.log(x);
        err();
      });
    });
  }
  makaleAra()
  {
    var formData = new FormData();
    formData.append("mak", this.aranan);
    this.bllOrtak.httpPost(formData, "Makale", "MakaleAraView").then(a => {
      var sonuc = <any>a;
      this.makaleListesi = sonuc.SonucJSON;

    }) 
  }
}
