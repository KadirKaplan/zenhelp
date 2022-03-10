import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-yonetim',
  templateUrl: './yonetim.page.html',
  styleUrls: ['./yonetim.page.scss'],
})
export class YonetimPage implements OnInit {

  constructor(public router : Router,public loadingCtrl : LoadingController) { }

  ngOnInit() {
  }
home()
{
   const loadingCtrl = this.loadingCtrl.create({
    message:'Lütfen bekleyiniz...',
    duration:750
  }).then(a=>{
    a.present();
  });
   
    setTimeout(() =>{
      this.router.navigate(['home']);
    },1000);


}
}
