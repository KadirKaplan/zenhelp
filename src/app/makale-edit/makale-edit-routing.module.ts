import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakaleEditPage } from './makale-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MakaleEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakaleEditPageRoutingModule {}
