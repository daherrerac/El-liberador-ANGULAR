import { Component, EventEmitter, OnInit, Output,ViewChild, Input  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  secondFormGroup!: FormGroup;
  @Output() private secondFormData = new EventEmitter<any>();
  showSumary = false;
  mensaje: string = "Datos del Inmueble"

  @ViewChild('tt', {static: false}) mytooltip!: NgbTooltip;
  
  getDataForm1: any;
  getDataForm2: any; 
  i=0;
  j=0;

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
      this.getDataForm1 = JSON.parse(localStorage.getItem('form1') || '{}');
      this.getDataForm2 = JSON.parse(localStorage.getItem('form2') || '{}');
      this.i = this.getDataForm1.length ;
      this.j = this.getDataForm2.length ;
      this.getDataForm1 = this.getDataForm1[this.i - 1];
      this.getDataForm2 = this.getDataForm2[this.j - 1];
      
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

  onClic(event: Event): any {
    event.preventDefault();
    if(this.showSumary){
      this.showSumary = false;                   
    }
  }
  
  showTooltip(){
    this.mytooltip.open();
  }

}


