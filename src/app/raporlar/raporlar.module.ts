import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaporlarPageRoutingModule } from './raporlar-routing.module';

import { RaporlarPage } from './raporlar.page';
// For MDB Angular Free

import { DxChartModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaporlarPageRoutingModule,
    DxChartModule
  ],
  declarations: [RaporlarPage]
})
export class RaporlarPageModule {}
