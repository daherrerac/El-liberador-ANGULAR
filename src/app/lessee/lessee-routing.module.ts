import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LesseeComponent } from './components/lessee/lessee.component';

const routes: Routes = [
  {
    path: '',
    component: LesseeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesseeRoutingModule {}
