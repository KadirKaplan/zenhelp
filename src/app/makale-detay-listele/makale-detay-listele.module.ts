import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakaleDetayListelePageRoutingModule } from './makale-detay-listele-routing.module';

import { MakaleDetayListelePage } from './makale-detay-listele.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakaleDetayListelePageRoutingModule
  ],
  declarations: [MakaleDetayListelePage]
})
export class MakaleDetayListelePageModule {}
