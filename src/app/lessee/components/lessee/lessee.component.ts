import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Step1Component } from '../step1/step1.component';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-lessee',
  templateUrl: './lessee.component.html',
  styleUrls: ['./lessee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class LesseeComponent implements OnInit {
  encabezado!:string;
  @ViewChild(Step1Component)
  step1Component!: Step1Component;
  @ViewChild(Step2Component) step2Component!: Step2Component;
  @ViewChild(Step2Component) mensaje!:string;
  // @ViewChild(Step3Component) step3Component: Step3Component;
  isLinear = false;
  $event: any;
  checked = false;
  indeterminate = false;
  last = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  form1: any = [0];
  form2: any = [0];
  

  constructor(private formBuilder: FormBuilder) {
   
  }

  readSteep(stepper:MatStepper){   
    console.log(stepper.selectedIndex);
  }

  ngOnInit(): void {}

  get step1(): any {
    return this.step1Component ? this.step1Component.firstFormGroup : null;
  }
  get step2(): any {
    return this.step2Component ? this.step2Component.secondFormGroup : null;
  }

  getDataFromFirstForm(newItem: any): any {
    this.encabezado ='Datos del Inmueble';
    this.form1.push(newItem);
    localStorage.setItem('form1', JSON.stringify(this.form1));
  }
  getDataFromSecondForm(newItem: any): any {
    this.encabezado ='Datos del Inmueble';
    this.form2.push(newItem);
    localStorage.setItem('form2', JSON.stringify(this.form2));
  }

  changeStep(event: any) {
    if(event.selectedIndex == 2) this.encabezado = "Validación de identidad";
    else if(event.selectedIndex == 3) this.encabezado = "Resultados solicitud"
  }

  ngAfterViewInit(stepper:MatStepper) { 
       
    if(!(this.step1Component.firstFormGroup.touched)){
      this.encabezado ='Datos del Arrendatario';
   }
    // if((this.step1Component.firstFormGroup.touched) && (this.step2Component.secondFormGroup.touched)){
    //   this.encabezado ='Datos del Inmueble';
    // }
    // console.log(this.encabezado);
    // console.log(this.step1Component);
    // console.log(this.step2Component);
  }
  // get step3(): any {
  //   return this.step3Component ? this.step3Component.firstFormGroup : null;
  // }
}
