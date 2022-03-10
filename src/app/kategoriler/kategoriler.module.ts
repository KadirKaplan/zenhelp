import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategorilerPageRoutingModule } from './kategoriler-routing.module';
import notify from 'devextreme/ui/notify';
import { KategorilerPage } from './kategoriler.page';
import { DxDataGridModule, DxFormModule, DxCheckBoxModule, DxButtonModule, DxSelectBoxModule, DxToolbarModule, DxTextBoxModule, DxButtonGroupModule, DxDrawerModule, DxTemplateModule } from 'devextreme-angular';
@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    KategorilerPageRoutingModule,DxDataGridModule,DxDataGridModule, DxFormModule, DxCheckBoxModule, DxButtonModule, DxToolbarModule, DxTextBoxModule,DxButtonGroupModule, DxDrawerModule,   FormsModule,DxTemplateModule
  ],
  declarations: [KategorilerPage]
})
export class KategorilerPageModule {

  ngAfterViewInit() { 
    notify("Warning message", "warning", 500);
}
}
