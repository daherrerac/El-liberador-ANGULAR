import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'arrendatario', loadChildren: () => import('./lessee/lessee.module').then(m => m.LesseeModule) },

  { path: 'codeudor', loadChildren: () => import('./cosigner/cosigner.module').then(m => m.CosignerModule) },

  { path: 'consultar-solicitud', loadChildren: () => import('./request-consult/request-consult.module').then(m => m.RequestConsultModule) },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}