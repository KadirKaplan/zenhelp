import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategoriEditPage } from './kategori-edit.page';

const routes: Routes = [
  {
    path: '',
    component: KategoriEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategoriEditPageRoutingModule {}
