import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild 
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {map, startWith,debounceTime} from 'rxjs/operators';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
 
})

export class Step1Component implements OnInit {
  ciudades:string[] =['   Bogotá','   Cali','   Medellín','   Tunja'];
  

  firstFormGroup!: FormGroup;
  @Output() private firstFormData = new EventEmitter<any>();

  @ViewChild('tt', {static: false}) mytooltip!: NgbTooltip;

  control = new FormControl();
  fillCiudades !: Observable<string[]>;

    
  
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.fillCiudades = this.firstFormGroup.controls['city'].valueChanges.pipe(
      startWith(''),
      map(val=> this._filter(val))
    );
  }

  private buildForm(): void {
    this.firstFormGroup = this.formBuilder.group({
      typeId: ['', Validators.required],
      numberDocument: ['', Validators.required],
      name: [null, Validators.required],
      secondName: [''],
      lastName: ['', Validators.required],
      lastName2: [''],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      occupation: ['', Validators.required],
    });
  }
 
  onSubmit(event: Event): any {
    event.preventDefault();
    if (this.firstFormGroup.valid) {
      const dataForm = this.firstFormGroup.value;
      this.firstFormData.emit(dataForm);
    } else {
      this.firstFormGroup.markAllAsTouched();
    }
  }

  getNameValue(): any {
    return this.firstFormGroup.get('name');
  }

  showTooltip(){
    this.mytooltip.open();
  }

  private _filter(val: string): string[]{
    const formatVal = val.toLocaleLowerCase();
    return this.ciudades.filter(ciudades => ciudades.toLocaleLowerCase().indexOf(formatVal) === 0);
  }
}
