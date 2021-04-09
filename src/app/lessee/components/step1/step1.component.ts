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
} from '@angular/forms';



@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
 
})

export class Step1Component implements OnInit {
  firstFormGroup!: FormGroup;
  @Output() private firstFormData = new EventEmitter<any>();

  @ViewChild('tt', {static: false}) mytooltip!: NgbTooltip;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

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

}
