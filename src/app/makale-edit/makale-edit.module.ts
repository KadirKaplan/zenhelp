import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakaleEditPageRoutingModule } from './makale-edit-routing.module';
import notify from 'devextreme/ui/notify';
import { MakaleEditPage } from './makale-edit.page';
import { DxHtmlEditorModule, DxCheckBoxModule } from 'devextreme-angular';
import { DxListModule } from "devextreme-angular";
import {
  DxTabsModule, DxButtonModule, DxTabPanelModule, DxFormModule, DxSelectBoxModule,
   DxFileUploaderModule, DxPopupModule, DxToolbarModule, DxTextBoxModule,DxDateBoxModule,DxTextAreaModule,DxBoxModule 
} from 'devextreme-angular';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakaleEditPageRoutingModule,
    DxCheckBoxModule,
    DxHtmlEditorModule,
    DxListModule,
    DxTabsModule, DxButtonModule, DxTabPanelModule, DxFormModule, DxSelectBoxModule,
   DxFileUploaderModule, DxPopupModule, DxToolbarModule, DxTextBoxModule,DxDateBoxModule,DxTextAreaModule,DxBoxModule,
   FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()

  ],
  declarations: [MakaleEditPage]
})
export class MakaleEditPageModule { ngAfterViewInit() { 
  notify("Warning message", "warning", 500);
}
}
