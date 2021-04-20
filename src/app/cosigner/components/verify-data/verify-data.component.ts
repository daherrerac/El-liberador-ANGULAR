import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Step1Component } from '../step1/step1.component'
import { Step2Component } from '../step2/step2.component'
import { Step3Component } from '../step3/step3.component'
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-verify-data',
  templateUrl: './verify-data.component.html',
  styleUrls: ['./verify-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class VerifyDataComponent implements OnInit {
  @ViewChild(Step1Component) step1Component!: Step1Component;
  @ViewChild(Step2Component) step2Component!: Step2Component;
  @ViewChild(Step3Component) step3Component!: Step3Component;
  @ViewChild('matStepper') matStepper: MatStepper;

  private form1: any = [0];
  private interval: any;
  
  public title: string;
  public stepper: MatStepper;

  constructor() {
    this.title = "Verificar";
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if(this.step3Component.stepIndex == 1) {
        this.changeStepperIndex();
      }
    }, 100)
  }

  get step1(): any {
    return this.step1Component;
  }

  get step2(): any {
    return this.step2Component ? this.step2Component.cosignerDataForm : null;
  }

  get step3(): any {
    return this.step3Component;
  }

  getDataFromCosignerDataForm(newItem: any): any {
    this.title ='Confirma los datos';
    this.form1.push(newItem);
    localStorage.setItem('cosignerDataForm', JSON.stringify(this.form1));
  }

  changeStep(event: any) {
    if(event.selectedIndex == 0) this.title = "Verificar";
    else if(event.selectedIndex == 1) this.title = "Datos del Codeudor"
  }

  changeStepperIndex() {
    this.matStepper.selectedIndex = 1
    this.step3Component.stepIndex = 0;

    clearInterval(this.interval)
  }

  ngAfterViewInit() {
    console.log(this.step3Component.stepIndex)

    
  }
}
