import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumary',
  templateUrl: './sumary.component.html',
  styleUrls: ['./sumary.component.scss'],
})
export class SumaryComponent implements OnInit {
  getDataForm1: any;
  getDataForm2: any;
  constructor() {}

  ngOnInit(): void {
    this.getDataForm1 = JSON.parse(localStorage.getItem('form1') || '{}');
    this.getDataForm2 = JSON.parse(localStorage.getItem('form2') || '{}');
    this.getDataForm1 = this.getDataForm1[0];
    this.getDataForm2 = this.getDataForm2[0];
  }
}
