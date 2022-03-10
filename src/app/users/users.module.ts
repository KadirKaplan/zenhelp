import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';
import notify from 'devextreme/ui/notify';
import { UsersPage } from './users.page';
import { DxDataGridModule, DxFormModule, DxCheckBoxModule, DxButtonModule, DxSelectBoxModule, DxToolbarModule, DxTextBoxModule, DxButtonGroupModule, DxDrawerModule, DxTemplateModule } from 'devextreme-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule, DxDataGridModule, DxFormModule, DxCheckBoxModule, DxButtonModule, DxSelectBoxModule, DxToolbarModule, DxTextBoxModule, DxButtonGroupModule, DxDrawerModule, DxTemplateModule
  ],
  declarations: [UsersPage]
})
export class UsersPageModule {
  ngAfterViewInit() { 
    notify("Warning message", "warning", 500);
}
}
