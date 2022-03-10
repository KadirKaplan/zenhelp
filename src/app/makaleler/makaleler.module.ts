import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import notify from 'devextreme/ui/notify';
import { MakalelerPageRoutingModule } from './makaleler-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MakalelerPage } from './makaleler.page';
import { DxDataGridModule, DxFormModule, DxCheckBoxModule, DxButtonModule, DxSelectBoxModule, DxToolbarModule, DxTextBoxModule, DxButtonGroupModule, DxDrawerModule, DxTemplateModule } from 'devextreme-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakalelerPageRoutingModule,FontAwesomeModule,DxDataGridModule,DxDataGridModule, DxFormModule, DxCheckBoxModule, DxButtonModule, DxToolbarModule, DxTextBoxModule,DxButtonGroupModule, DxDrawerModule,   FormsModule,DxTemplateModule
  ],
  declarations: [MakalelerPage]
})
export class MakalelerPageModule {
  ngAfterViewInit() { 
    notify("Warning message", "warning", 500);
}
}
