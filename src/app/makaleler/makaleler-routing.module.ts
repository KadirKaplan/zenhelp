import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakalelerPage } from './makaleler.page';

const routes: Routes = [
  {
    path: '',
    component: MakalelerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakalelerPageRoutingModule {}
