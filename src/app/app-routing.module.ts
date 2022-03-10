import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'yonetim',
    loadChildren: () => import('./yonetim/yonetim.module').then( m => m.YonetimPageModule)
  },
  {
    path: 'kategoriler',
    loadChildren: () => import('./kategoriler/kategoriler.module').then( m => m.KategorilerPageModule)
  },
  {
    path: 'makaleler',
    loadChildren: () => import('./makaleler/makaleler.module').then( m => m.MakalelerPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'user-edit',
    loadChildren: () => import('./user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },
  {
    path: 'kategori-edit',
    loadChildren: () => import('./kategori-edit/kategori-edit.module').then( m => m.KategoriEditPageModule)
  },
  {
    path: 'makale-edit',
    loadChildren: () => import('./makale-edit/makale-edit.module').then( m => m.MakaleEditPageModule)
  },
  {
    path: 'kategori-ekle-guncelle',
    loadChildren: () => import('./kategori-ekle-guncelle/kategori-ekle-guncelle.module').then( m => m.KategoriEkleGuncellePageModule)
  },
  {
    path: 'kullanicilar',
    loadChildren: () => import('./kullanicilar/kullanicilar.module').then( m => m.KullanicilarPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'raporlar',
    loadChildren: () => import('./raporlar/raporlar.module').then( m => m.RaporlarPageModule)
  },
  {
    path: 'makale-ekle-guncelle',
    loadChildren: () => import('./makale-ekle-guncelle/makale-ekle-guncelle.module').then( m => m.MakaleEkleGuncellePageModule)
  },
  {
    path: 'makale-detay-listele',
    loadChildren: () => import('./makale-detay-listele/makale-detay-listele.module').then( m => m.MakaleDetayListelePageModule)
  },
  {
    path: 'makale-oku',
    loadChildren: () => import('./makale-oku/makale-oku.module').then( m => m.MakaleOkuPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
