import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DxTextAreaModule, DxCheckBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { KategoriEkleGuncellePageRoutingModule } from './kategori-ekle-guncelle-routing.module';

import { KategoriEkleGuncellePage } from './kategori-ekle-guncelle.page';
import { DxDataGridModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

import {  DxFormModule, DxFileUploaderModule, DxButtonModule, DxToolbarModule, DxTextBoxModule, DxButtonGroupModule, DxDrawerModule, DxTemplateModule } from 'devextreme-angular';
@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    DxTextAreaModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    KategoriEkleGuncellePageRoutingModule,
    DxDataGridModule,
    DxFileUploaderModule, DxFormModule, DxCheckBoxModule, DxButtonModule, DxToolbarModule, DxTextBoxModule,DxButtonGroupModule, DxDrawerModule,   FormsModule,DxTemplateModule
  ],
  declarations: [KategoriEkleGuncellePage]
})
export class KategoriEkleGuncellePageModule {}
 