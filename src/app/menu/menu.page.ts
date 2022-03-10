import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title : 'Anasayfa',
      url: '/menu/home'
    },
    {
      title : 'Anasayfa',
      url: '/menu/home'
    },
    {
      title : 'Kategoriler',
      url: '/menu/kategoriler'
    },
    {
      title : 'Makaleler',
      url: '/menu/home'
    }
  ];
  selectedPath ='';
  constructor(public router : Router) {
    this.router.events.subscribe((event: RouterEvent) => {
this.selectedPath = event.url;
    })
   }

  ngOnInit() {
  }

}
