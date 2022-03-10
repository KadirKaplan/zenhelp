import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';
import {Router} from '@angular/router';
import { RegisterPage } from '../register/register.page';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  email="";
  password="";
  constructor(private navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl : LoadingController,
    public modalCtrl : ModalController,
    
    
    
    
 
   // public NavParams : NavParams,
   public bllOrtak : BllOrtakProvider,
   public router: Router) {
    
    }
    girisMethod()
    {
      
     
  
      if (this.boslukKontrol()) {
        var formData = new FormData();
        formData.append("email", this.email);
        formData.append("password", this.password);
        this.bllOrtak.httpPost(formData, "Kullanici", "Giris").then(a => {
          var sonuc = <any>a;
          const loadingCtrl = this.loadingCtrl.create({
            message:'Lütfen bekleyiniz...',
            duration:750
          }).then(a=>{
            a.present();
          });
          if (sonuc.Sonuc == 1) { 
            setTimeout(() =>{
              this.router.navigate(['home']);
              notify('Giriş başarılı!.. Anasayfaya yönlendiriliyorsunuz.. ', 'success', 600);
            },1000);
            //Anasayfaya yönlendirilecek
            localStorage.setItem("kullanici", JSON.stringify(sonuc.SonucJSON));
           
            
            
          }
          else if (sonuc.Sonuc == 2) {
            
            //Giriş hatalı mesajı
            notify('Lütfen kullanıcı bilgilerinizi kontrol edip tekrar deneyiniz ', 'warning', 600);
            
          }
          else {  
            //Sistem hata mesajı
          }
        })
      }
  
    }
    
  
    boslukKontrol() {
      var res = true;
      var mesaj = "";
      if (this.email == "") {
        mesaj = "Lütfen kullanıcı adınızı giriniz. \r\n";
      }
      if (this.password == "") {
        mesaj += "Lütfen şifrenizi giriniz. \r\n";
      }
      if (mesaj != "") {
        alert(mesaj);
        res = false;
      }
      return res;
    }
  
    helloWorld() {
      alert('Hello world!');
  }
  
  
  register()
    {
      const modal = this.modalCtrl.create({
        component: RegisterPage
          
        
      }).then(a => {
  
        a.present();
    
      });
    }
  
    addValue(e): void {
      console.log(e.currentTarget.checked);	
     console.log("merhaba");
   
  }

}
