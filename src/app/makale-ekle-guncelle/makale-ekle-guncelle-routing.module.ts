import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakaleEkleGuncellePage } from './makale-ekle-guncelle.page';

const routes: Routes = [
  {
    path: '',
    component: MakaleEkleGuncellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakaleEkleGuncellePageRoutingModule {}
