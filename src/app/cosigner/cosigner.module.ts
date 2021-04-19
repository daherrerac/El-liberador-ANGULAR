import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CosignerRoutingModule } from './cosigner-routing.module';
import { CosignerComponent } from './components/cosigner/cosigner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { VerifyDataComponent } from './components/verify-data/verify-data.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';

@NgModule({
  declarations: [CosignerComponent, VerifyDataComponent, Step1Component, Step2Component, Step3Component],
  imports: [
    CommonModule,
    CosignerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CosignerModule {}
