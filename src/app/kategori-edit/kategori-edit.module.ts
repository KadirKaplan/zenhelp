import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriEditPageRoutingModule } from './kategori-edit-routing.module';
import notify from 'devextreme/ui/notify';
import { KategoriEditPage } from './kategori-edit.page';
import { DxDataGridModule, DxFormModule, DxFileUploaderModule,DxCheckBoxModule, DxButtonModule, DxSelectBoxModule, DxToolbarModule, DxTextBoxModule, DxButtonGroupModule, DxDrawerModule, DxTemplateModule } from 'devextreme-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriEditPageRoutingModule,DxDataGridModule,DxDataGridModule,DxFileUploaderModule, DxFormModule, DxCheckBoxModule, DxButtonModule, DxToolbarModule, DxTextBoxModule,DxButtonGroupModule, DxDrawerModule,   FormsModule,DxTemplateModule
  ],
  declarations: [KategoriEditPage]
})
export class KategoriEditPageModule {
  ngAfterViewInit() { 
    notify("Warning message", "warning", 500);
}
}
