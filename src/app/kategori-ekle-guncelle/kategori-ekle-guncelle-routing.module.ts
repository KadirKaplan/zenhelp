import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategoriEkleGuncellePage } from './kategori-ekle-guncelle.page';

const routes: Routes = [
  {
    path: '',
    component: KategoriEkleGuncellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategoriEkleGuncellePageRoutingModule {}
