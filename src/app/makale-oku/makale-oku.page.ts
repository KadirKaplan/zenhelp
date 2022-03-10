import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';
import { Router,ActivatedRoute } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Location } from '@angular/common';

@Component({
  selector: 'app-makale-oku',
  templateUrl: './makale-oku.page.html',
  styleUrls: ['./makale-oku.page.scss'],
})
export class MakaleOkuPage implements OnInit {

  constructor(public router: Router,public activatedRoute: ActivatedRoute,public _location : Location, public bllOrtak: BllOrtakProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }
makaleBilgisi = [];

ngOnInit() {
  this.MakaleAra().then(a => {
    this.MakaleBilgisiGetir().then(b => {

    });
  });
}
  makaleAraKeyPress(e) {
    if (e.keyCode == 13) {
      this.MakaleAra();
    }
  
  
  }
  async MakaleBilgisiGetir() {
    return new Promise((res, err) => {
      this.activatedRoute.queryParams.subscribe(param => {
        if (param != null) {
          const formData = new FormData(); 
          formData.append('ID', param.ID.toString());
          this.bllOrtak.httpPost(formData,"Makale","MakaleDetayGetir").then(a => {
            const sonuc = (a as any);
            this.makaleBilgisi = sonuc.SonucJSON;
            console.log("makale bilgisi : ",this.makaleBilgisi);
            
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
        this.makaleBilgisi = sonuc.SonucJSON;
        console.log("sayfaListesiModel",this.makaleBilgisi);
        res(1);
      }).catch(x => {
        console.log(x);
        err();
      });
    });
  }
}
