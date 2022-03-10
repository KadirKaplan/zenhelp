import { Component, OnInit } from '@angular/core';

import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BllOrtakProvider } from 'src/providers/bll-ortak/bll-ortak';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raporlar',
  templateUrl: './raporlar.page.html',
  styleUrls: ['./raporlar.page.scss'],
})
export class RaporlarPage implements OnInit {

  constructor(public router: Router, public bllOrtak: BllOrtakProvider, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }
aranan = "";
raporListesi = [];

  ngOnInit() {
  this.raporGet();
    
  }
        raporGet()
        {
          var formData = new FormData();
            formData.append("rapor", this.aranan);
            this.bllOrtak.httpPost(formData, "Rapor", "RaporAra").then(a => {
              var sonuc = <any>a;
              this.raporListesi = sonuc.SonucJSON;

            }) 
        }



        public chartType: string = 'line';

        public chartDatasets: Array<any> = [
          { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
          { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
        ];
      
        public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
        public chartColors: Array<any> = [
          {
            backgroundColor: 'rgba(105, 0, 132, .2)',
            borderColor: 'rgba(200, 99, 132, .7)',
            borderWidth: 2,
          },
          {
            backgroundColor: 'rgba(0, 137, 132, .2)',
            borderColor: 'rgba(0, 10, 130, .7)',
            borderWidth: 2,
          }
        ];
      
        public chartOptions: any = {
          responsive: true
        };
        public chartClicked(e: any): void { }
        public chartHovered(e: any): void { }
        
}
