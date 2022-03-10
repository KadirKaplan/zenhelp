import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YonetimPageRoutingModule } from './yonetim-routing.module';

import { YonetimPage } from './yonetim.page';
import { DxButtonModule } from 'devextreme-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YonetimPageRoutingModule,DxButtonModule
  ],
  declarations: [YonetimPage]
})
export class YonetimPageModule {}
