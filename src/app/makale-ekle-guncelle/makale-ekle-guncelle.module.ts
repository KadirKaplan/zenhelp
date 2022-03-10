import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakaleEkleGuncellePageRoutingModule } from './makale-ekle-guncelle-routing.module';

import { MakaleEkleGuncellePage } from './makale-ekle-guncelle.page';

import { DxListModule } from "devextreme-angular";
import {
  DxTabsModule, DxButtonModule, DxTabPanelModule, DxFormModule, DxSelectBoxModule,
   DxFileUploaderModule, DxPopupModule, DxToolbarModule, DxTextBoxModule,DxDateBoxModule,DxTextAreaModule,DxBoxModule 
} from 'devextreme-angular';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { DxHtmlEditorModule, DxCheckBoxModule } from 'devextreme-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakaleEkleGuncellePageRoutingModule,
    DxHtmlEditorModule,
    DxCheckBoxModule,
    DxListModule,
    DxTabsModule, DxButtonModule, DxTabPanelModule, DxFormModule, DxSelectBoxModule,
   DxFileUploaderModule, DxPopupModule, DxToolbarModule, DxTextBoxModule,DxDateBoxModule,DxTextAreaModule,DxBoxModule,
  ],
  declarations: [MakaleEkleGuncellePage]
})
export class MakaleEkleGuncellePageModule {}
