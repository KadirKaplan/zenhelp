import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';
import { Router } from '@angular/router';
import { KategoriEditPage } from '../kategori-edit/kategori-edit.page';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-kategoriler',
  templateUrl: './kategoriler.page.html',
  styleUrls: ['./kategoriler.page.scss'],
})
export class KategorilerPage implements OnInit {
  aranan="";
  kategoriListesi=[];
  constructor(public router: Router, public bllOrtak: BllOrtakProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.kategorilerMethod();
  
  }

  kategoriAraKeyPress(e) {
    if (e.keyCode == 13) {
      this.kategorilerMethod();
    }


  }
 yenile()
{
  this.kategorilerMethod(); 
}
duzenle(data)
{
  this.router.navigateByUrl('/kategori-ekle-guncelle?ID=' + data.key);
  console.log("ID::::",data.key)
  
}
  kategorilerMethod() {
    var formData = new FormData();
    formData.append("kat", this.aranan);
    this.bllOrtak.httpPost(formData, "Kategori", "KategoriAra").then(a => {
      var sonuc = <any>a;
      this.kategoriListesi = sonuc.SonucJSON;

    }) 
  }

  ekleGuncelle(kategori) {
    
    const modal = this.modalCtrl.create({
      component: KategoriEditPage, componentProps: {
        kategoriEnt: kategori
      }
    }).then(a => {

      a.present();
  
    });
  
  }
  // HemenGuncelle(prmKategori) {
  //   const modal = this.modalCtrl.create(KategoriGuncellePage, { kategori: prnKategori });
  //   modal.present();
  // }


  sil(data)
  {
    console.log(data.key);
    var formData = new FormData();
    formData.append("id",data.key);
    this.bllOrtak.httpPost(formData,"Kategori","KategoriSil").then(a => {
      var sonuc = <any>a;
      this.kategoriListesi = sonuc.SonucJSON;
      const loadingCtrl = this.loadingCtrl.create({
        message:'Lütfen bekleyiniz...',
        duration:750
      }).then(a=>{
        a.present();
      });
      if (sonuc.Sonuc == 1) { 
        setTimeout(() =>{
          this.router.navigate(['kategoriler']);
          this.kategorilerMethod();
        
        },1000);
        notify('Silme İşlemi Başarılı !', 'success', 600);
      }
      else if (sonuc.Sonuc == 99) {
        alert("başarısız");
        notify('Bir hata oluştu !!!', 'danger', 600);
      }
      else {
 
      } 
      this.loadingCtrl.dismiss();
    })
  }
}
