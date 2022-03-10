import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakaleOkuPageRoutingModule } from './makale-oku-routing.module';

import { MakaleOkuPage } from './makale-oku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakaleOkuPageRoutingModule
  ],
  declarations: [MakaleOkuPage]
})
export class MakaleOkuPageModule {}
