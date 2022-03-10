import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';
import { Router } from '@angular/router';
import { MakaleEditPage } from '../makale-edit/makale-edit.page';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-makaleler',
  templateUrl: './makaleler.page.html',
  styleUrls: ['./makaleler.page.scss'],
})
export class MakalelerPage implements OnInit {
 
  aranan="";
  makaleListesi=[];

  makale = {
    Mak_ID : -1,
    Mak_Baslik: "",
    Mak_Icerik:"",
    Mak_Tarih: new Date(),
    Mak_Yazar:"",
  }
  constructor(public router: Router, public bllOrtak: BllOrtakProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.makalelerMethod();
  }

  makaleAraKeyPress(e) {
    if (e.keyCode == 13) {
      this.makalelerMethod();
    }
 

  }

  duzenle(data) { 
   
    this.router.navigateByUrl('/makale-ekle-guncelle?ID=' + data.key);
    console.log("ID::::",data.key)
  }

  html()
  {
    this.router.navigate(['makale-edit']);
  }
yenile()
{
  this.makalelerMethod();
}
 
makalelerMethod() {
    var formData = new FormData();
    formData.append("mak", this.aranan);
    this.bllOrtak.httpPost(formData, "Makale", "MakaleAraView").then(a => {
      var sonuc = <any>a;
      this.makaleListesi = sonuc.SonucJSON;

    }) 
  } 

  ekleGuncelle(makale) {
    
    const modal = this.modalCtrl.create({
      component: MakaleEditPage, componentProps: {
        makaleEnt: makale
      }
    }).then(a => {

      a.present();
  
    });
  
  }



  sil(data)
  {
    console.log(data.key);
    var formData = new FormData();
    formData.append("id",data.key);
    this.bllOrtak.httpPost(formData,"Makale","MakaleSill").then(a => {
      var sonuc = <any>a;
      this.makaleListesi = sonuc.SonucJSON;
      const loadingCtrl = this.loadingCtrl.create({
        message:'Lütfen bekleyiniz...',
        duration:750
      }).then(a=>{
        a.present();
      });
      if (sonuc.Sonuc == 1) { 
        setTimeout(() =>{
          this.router.navigate(['makaleler']);
          this.makalelerMethod();
        
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
  hemenSil(makale)
  {
    

    var formData = new FormData();
    formData.append("kod",makale.Mak_Baslik);
    this.bllOrtak.httpPost(formData,"Makale","MakaleSil").then(a => {
      var sonuc = <any>a;
      this.makaleListesi = sonuc.SonucJSON;
      const loadingCtrl = this.loadingCtrl.create({
        message:'Lütfen bekleyiniz...',
        duration:750
      }).then(a=>{
        a.present();
      });
      if (sonuc.Sonuc == 1) { 
        setTimeout(() =>{
          this.makalelerMethod();

        },1000);
      }
      else if (sonuc.Sonuc == 99) {
        alert("başarısız");
      }
      else {

      } 
      this.loadingCtrl.dismiss();
    })
  }

  makaleEditPage()
      {
        const loadingCtrl = this.loadingCtrl.create({
          message:'Lütfen bekleyiniz...',
          duration:750
        }).then(a=>{
          a.present();
        });
        
          setTimeout(() =>{
            this.router.navigate(['makale-ekle-guncelle']);
          },1000);

      }

}
