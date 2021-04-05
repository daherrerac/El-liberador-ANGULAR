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

@Component({
  selector: 'app-lessee',
  templateUrl: './lessee.component.html',
  styleUrls: ['./lessee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LesseeComponent implements OnInit {
  @ViewChild(Step1Component)
  step1Component!: Step1Component;
  @ViewChild(Step2Component) step2Component!: Step2Component;
  // @ViewChild(Step3Component) step3Component: Step3Component;
  isLinear = false;
  $event: any;
  checked = false;
  indeterminate = false;
  last = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  form1: any = [];
  form2: any = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  get step1(): any {
    return this.step1Component ? this.step1Component.firstFormGroup : null;
  }
  get step2(): any {
    return this.step2Component ? this.step2Component.secondFormGroup : null;
  }

  getDataFromFirstForm(newItem: any): any {
    this.form1.push(newItem);
    localStorage.setItem('form1', JSON.stringify(this.form1));
  }
  getDataFromSecondForm(newItem: any): any {
    this.form2.push(newItem);
    localStorage.setItem('form2', JSON.stringify(this.form2));
  }

  // get step3(): any {
  //   return this.step3Component ? this.step3Component.firstFormGroup : null;
  // }
}
