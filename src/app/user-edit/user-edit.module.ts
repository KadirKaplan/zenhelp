import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEditPageRoutingModule } from './user-edit-routing.module';

import { UserEditPage } from './user-edit.page';
import { DxHtmlEditorModule, DxCheckBoxModule } from 'devextreme-angular';
import { DxListModule } from "devextreme-angular";
import {
  DxTabsModule, DxButtonModule, DxTabPanelModule, DxFormModule, DxSelectBoxModule,
   DxFileUploaderModule, DxPopupModule, DxToolbarModule, DxTextBoxModule,DxDateBoxModule
} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEditPageRoutingModule,DxCheckBoxModule,
    DxHtmlEditorModule,
    DxListModule,
    DxTabsModule, DxButtonModule, DxTabPanelModule, DxFormModule, DxSelectBoxModule,
   DxFileUploaderModule, DxPopupModule, DxToolbarModule, DxTextBoxModule,DxDateBoxModule
  ],
  declarations: [UserEditPage]
})
export class UserEditPageModule {
  ngAfterViewInit() { 
    notify("Warning message", "warning", 500);
}
}
