import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakaleDetayListelePage } from './makale-detay-listele.page';

const routes: Routes = [
  {
    path: '',
    component: MakaleDetayListelePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakaleDetayListelePageRoutingModule {}
