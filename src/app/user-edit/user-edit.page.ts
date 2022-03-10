import { Component, OnInit } from '@angular/core';

import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {

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

  aranan="";
  

    constructor(public router: Router, public bllOrtak: BllOrtakProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }
  
  
    ngOnInit() {
    
      this.kullaniciListesiGet();
      
    }
  
    
    
    kullaniciListesiGet()
    {
      
      var formData = new FormData();
      formData.append("user", this.aranan);
      this.bllOrtak.httpPost(formData, "Kullanici", "KullaniciAra").then(a => {
        const sonuc = <any>a;
        this.kullaniciListesi = sonuc.SonucJSON;
  
      }) 
    }
    // kullaniciListesiGet()
    // {
    //   var formData = new FormData();
    //   formData.append("user","");
    //   this.bllOrtak.httpPost(formData, "Kullanici", "KullaniciAra").then(a => {
    //     const sonuc = <any>a;
    //     this.kullaniciListesi = sonuc.SonucJSON;
  
    //   })
    // }
  
    kullaniciEkle()
    {
      var formData = new FormData();
      formData.append("user", JSON.stringify(this.kullanici));
  
      this.bllOrtak.httpPost(formData, "Kullanici", "KullaniciEkle").then(a => {
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
         
          
        
        },1000);
        
        notify('Kayıt İşlemi Başarılı !', 'success', 600);
        
        window.location.reload();
        this.kullaniciListesiGet();
        this.modalCtrl.dismiss();
       
      }
      else if (sonuc.Sonuc == 99) {
        alert("başarısız");
        notify('Bir Hata Oluştu !!!', 'danger', 600);
      }
      else {

      } 
      this.loadingCtrl.dismiss();
    })
  
    }
  //   onValueTypeChanged({ addedItems }) {
  //     this.editorValueType = addedItems[0].text.toLowerCase();
  //     this.makale.Mak_Icerik = this.editorValueType;
  // }
  
  // valueChange(value) {
  //     this.valueContent = value;
  // }
  
  kullaniciPanelPage()
  {
    const loadingCtrl = this.loadingCtrl.create({
      message:'Lütfen bekleyiniz...',
      duration:750
    }).then(a=>{
      a.present();
    
    });
    
      setTimeout(() =>{
        this.router.navigate(['users']);
      },1000);
  }
}
