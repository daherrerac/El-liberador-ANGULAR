import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestConsultRoutingModule } from './request-consult-routing.module';
import { ConsultComponent } from './components/consult/consult.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [ConsultComponent, DetailComponent],
  imports: [
    CommonModule,
    RequestConsultRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class RequestConsultModule { }
