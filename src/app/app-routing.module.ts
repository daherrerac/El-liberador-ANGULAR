import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'arrendatario',
        loadChildren: () =>
          import('./lessee/lessee.module').then((m) => m.LesseeModule),
      },
      {
        path: 'codeudor', loadChildren: () => import('./cosigner/cosigner.module').then(m => m.CosignerModule)
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true 
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
