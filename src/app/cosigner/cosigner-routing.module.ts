import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosignerComponent } from './components/cosigner/cosigner.component'
import { VerifyDataComponent } from './components/verify-data/verify-data.component';

const routes: Routes = [
  { path: '', component: CosignerComponent },
  { path: 'datos', component: VerifyDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CosignerRoutingModule { }
