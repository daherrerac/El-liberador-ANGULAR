import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-sumary',
  templateUrl: './sumary.component.html',
  styleUrls: ['./sumary.component.scss'],
})
export class SumaryComponent implements OnInit {
  getDataForm1: any;
  getDataForm2: any;
  childSummary = false;
  @Input() showSumary!: boolean;
  

  constructor() {
   
  }

  
  ngOnInit(): void {
    this.getDataForm1 = JSON.parse(localStorage.getItem('form1') || '{}');
    this.getDataForm2 = JSON.parse(localStorage.getItem('form2') || '{}');
    this.getDataForm1 = this.getDataForm1[0];
    this.getDataForm2 = this.getDataForm2[0];
  }

  onClic(event: Event): any {
    event.preventDefault();
    if(this.showSumary){
      this.childSummary = false;
    }
  }
 
}
