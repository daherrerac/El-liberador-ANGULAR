import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  @Output() private cosignerForm = new EventEmitter<any>();
  @ViewChild('tt', {static: false}) mytooltip!: NgbTooltip;

  private i = 0;

  public cosignerDataForm = new FormGroup({
    typeId: new FormControl('', Validators.required),
    numberDocument: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    secondName: new FormControl(''),
    lastName: new FormControl('', Validators.required),
    lastName2: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
    dataPolices: new FormControl('', Validators.required),
    useData: new FormControl('', Validators.required),
    sendData: new FormControl(''),
  });

  public ciudades:string[] = ['   Bogotá','   Cali','   Medellín','   Tunja'];
  public fillCiudades !: Observable<string[]>;
  public getDataFormCosigner: any;
  public showSumary = false;

  constructor() {}

  ngOnInit(): void {
    this.fillCiudades = this.cosignerDataForm.controls['city'].valueChanges.pipe(
      startWith(''),
      map(val=> this._filter(val))
    );
  }

  showTooltip(){
    this.mytooltip.open();
  }

  private _filter(val: string): string[]{
    const formatVal = val.toLocaleLowerCase();
    return this.ciudades.filter(ciudades => ciudades.toLocaleLowerCase().indexOf(formatVal) === 0);
  }

  hideSumary(event: Event): any {
    event.preventDefault();

    if(this.showSumary) this.showSumary = false;                   
  }

  onSubmit(event: Event): any {    
    event.preventDefault();

    if(this.cosignerDataForm.valid) {
      const dataForm = this.cosignerDataForm.value;
      this.cosignerForm.emit(dataForm);
      this.getDataFormCosigner = JSON.parse(localStorage.getItem('cosignerDataForm') || '{}');
      this.i = this.getDataFormCosigner.length;
      this.getDataFormCosigner = this.getDataFormCosigner[this.i - 1];
      this.showSumary = true;
    } else this.cosignerDataForm.markAllAsTouched()
  }
}
