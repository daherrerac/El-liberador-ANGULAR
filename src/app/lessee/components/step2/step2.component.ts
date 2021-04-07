import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  secondFormGroup!: FormGroup;
  @Output() private secondFormData = new EventEmitter<any>();
  showSumary = false;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(): void {
    this.secondFormGroup = this.formBuilder.group({
      addressRent: ['', Validators.required],
      cityRent: ['', Validators.required],
      useProperty: ['', Validators.required],
      typeProperty: ['', Validators.required],
      priceRent: ['', Validators.required],
      inmobiliaria: '',
      cityInmobiliaria: '',
      dataPolices: ['', Validators.required],
      useData: ['', Validators.required],
     // sendData: ['', Validators.required],
      inmobiliaria2: '',
      administracion:'',
      administracion2:'',
    });
  }

  onSubmit(event: Event): any {
    event.preventDefault();
    if (this.secondFormGroup.valid) {
      const dataForm = this.secondFormGroup.value;
      this.secondFormData.emit(dataForm);
      this.showSumary = true;
    } else {
      this.secondFormGroup.markAllAsTouched();
    }
  }

  getValueSwitch(): boolean {
    return this.secondFormGroup.get('inmobiliaria2')?.value;
  }
  getValueSwitchAdmon(): boolean {
    return this.secondFormGroup.get('administracion2')?.value;
  }
}
