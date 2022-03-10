import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';
import { Routes } from '@angular/router';
import { MenuPage } from './menu.page';
import { HomePage } from '../home/home.page';
import { KategorilerPage } from '../kategoriler/kategoriler.page';
const routes: Routes = [
  {
      path:'menu',
      component:MenuPage,
      children : [
        {
          path: 'home',
          component:HomePage,
          loadChildren:'../home/home.module#HomePageModule'
        },
        {
          path:'kategoriler',
          component: KategorilerPage,
          loadChildren : './kategoriler/kategoriler.module#KategorilerPageModule'
        }
      ]
  },
  {
    path:'',
  redirectTo: ''
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
