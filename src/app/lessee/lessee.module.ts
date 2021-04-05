import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LesseeRoutingModule } from './lessee-routing.module';
import { LesseeComponent } from './components/lessee/lessee.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { Step4Component } from './components/step4/step4.component';
import { SwitchControlModule } from '@shared/switch-control/switch-control.module';
import { SumaryComponent } from './components/sumary/sumary.component';
import { BannerArrendatarioComponent } from './components/banner/banner-arrendatario/banner-arrendatario.component';

@NgModule({
  declarations: [
    LesseeComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    SumaryComponent,
    BannerArrendatarioComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LesseeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwitchControlModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LesseeModule {}
