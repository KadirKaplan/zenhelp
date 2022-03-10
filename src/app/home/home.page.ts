import { Component } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  aranan="";
  genelListe=[];
  constructor(public router: Router, public bllOrtak: BllOrtakProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.kategorilerMethod();
    console.log(this.genelListe);
  
  }

  makaleAraKeyPress(e) {
    if (e.keyCode == 13) {
      this.kategorilerMethod();
    }


  }
  go(kategori)
  {
    this.router.navigateByUrl('/makale-detay-listele?ID=' + kategori.ID);
    console.log("ID::::",kategori.ID)
  }
 
  kategorilerMethod() {
    var formData = new FormData();
    formData.append("kat", this.aranan);
    this.bllOrtak.httpPost(formData, "Kategori", "KategoriAra").then(a => {
      var sonuc = <any>a;
      this.genelListe = sonuc.SonucJSON;
     
    }) 
  }
  
loginPanelPage()
{
  const loadingCtrl = this.loadingCtrl.create({
    message:'Lütfen bekleyiniz...',
    duration:750
  }).then(a=>{
    a.present();
  });
   
    setTimeout(() =>{
      this.router.navigate(['login']);
    },1000);

}

}
