import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategorilerPage } from './kategoriler.page';

const routes: Routes = [
  {
    path: '',
    component: KategorilerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategorilerPageRoutingModule {}
