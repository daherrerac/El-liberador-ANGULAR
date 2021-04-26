import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {
  @ViewChild('tt', {static: false}) mytooltip!: NgbTooltip;
  
  public title: string;
  public consultForm = new FormGroup({
    document: new FormControl('', [Validators.required]),
    documentNumber: new FormControl('', [Validators.required]),
    requestNumber: new FormControl('', [Validators.required])
  })

  constructor(private router: Router) {
    this.title = 'Registrarme';
  }

  ngOnInit(): void {}

  showTooltip(){
    this.mytooltip.open();
  }

  onSubmit() {
    if (this.consultForm.valid) {
      this.router.navigate(['consultar-solicitud/resultado'])
      let dataForm = this.consultForm.value;
      localStorage.setItem('consultForm', JSON.stringify(dataForm))
    } else this.consultForm.markAllAsTouched();
  }
}