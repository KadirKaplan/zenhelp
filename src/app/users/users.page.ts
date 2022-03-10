import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';
import { Router } from '@angular/router';
import { MakaleEditPage } from '../makale-edit/makale-edit.page';
import notify from 'devextreme/ui/notify';
import { UserEditPage } from '../user-edit/user-edit.page';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  aranan="";
  kullaniciListesi=[];

  kullanici = {
    Usr_ID:-1,
    Usr_Username:"",
    Usr_Mail:"",
    Usr_Password:"",
    Usr_Adi:"",
    Usr_Adres:"",
    Usr_Telefon:"",
    Usr_Soyadi:"",
  }
  constructor(public router: Router, public bllOrtak: BllOrtakProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.kullanicilarMethod();
  }

  kullaniciAraKeyPress(e) {
    if (e.keyCode == 13) {
      this.kullanicilarMethod();
    }


  }
  
yenile()
{
  this.kullanicilarMethod();
}
 ekleGuncelle(kategori) {
    
    const modal = this.modalCtrl.create({
      component: UserEditPage, componentProps: {
        kategoriEnt: kategori
      }
    }).then(a => {

      a.present();
  
    });
  
  }
kullanicilarMethod() {
    var formData = new FormData();
    formData.append("user", this.aranan);
    this.bllOrtak.httpPost(formData, "Kullanici", "KullaniciAra").then(a => {
      var sonuc = <any>a;
      this.kullaniciListesi = sonuc.SonucJSON;

    }) 
  }

  
  sil(data)
  {
    console.log(data.key);
    var formData = new FormData();
    formData.append("id",data.key);
    this.bllOrtak.httpPost(formData,"Kullanici","KullaniciSil").then(a => {
      var sonuc = <any>a;
      this.kullaniciListesi = sonuc.SonucJSON;
      const loadingCtrl = this.loadingCtrl.create({
        message:'Lütfen bekleyiniz...',
        duration:750
      }).then(a=>{
        a.present();
      });
      if (sonuc.Sonuc == 1) { 
        setTimeout(() =>{
          this.router.navigate(['users']);
          this.kullanicilarMethod();
        
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

  
  kullaniciEditPage()
      {
        const loadingCtrl = this.loadingCtrl.create({
          message:'Lütfen bekleyiniz...',
          duration:750
        }).then(a=>{
          a.present();
        });
        
          setTimeout(() =>{
            this.router.navigate(['user-edit']);
          },1000);

      }

}
