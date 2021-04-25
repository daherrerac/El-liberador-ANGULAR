import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './components/consult/consult.component'
import { DetailComponent } from './components/detail/detail.component'

const routes: Routes = [
  { path: '', component: ConsultComponent },
  { path: 'detalle/:documentNumber/:requestNumber', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestConsultRoutingModule {}