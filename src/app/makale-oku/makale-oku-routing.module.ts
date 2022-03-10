import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakaleOkuPage } from './makale-oku.page';

const routes: Routes = [
  {
    path: '',
    component: MakaleOkuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakaleOkuPageRoutingModule {}
