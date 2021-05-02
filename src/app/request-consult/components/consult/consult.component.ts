import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RequestConsultServiceService } from '../../services/request-consult-service.service';

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
  });
  public loading: boolean;

  constructor(private router: Router, private requestConsultService: RequestConsultServiceService) {
    this.title = 'Registrarme';
  }

  ngOnInit(): void {}

  showTooltip(){
    this.mytooltip.open();
  }

  onSubmit() {
    if (this.consultForm.valid) {
      let dataForm = this.consultForm.value;
      localStorage.setItem('consultForm', JSON.stringify(dataForm))
      this.loadData(this.consultForm.controls.documentNumber.value, this.consultForm.controls.requestNumber.value)
    } else this.consultForm.markAllAsTouched();
  }

  loadData(documentNumber: number, requestNumber: number) {
    this.loading = true;
    
    /** el set time out se usa para "falsear el tiempo de carga" quitarlo cuando se tenga el serivio real, se esta usando un servicio de pruebas */
    
    setTimeout(() => {
      this.requestConsultService.getRequestStatus(documentNumber, requestNumber)
      .then(response => {
        this.loading = false;
        this.router.navigate(['consultar-solicitud/resultado'])
        console.log(response)
      }
      , error => console.log("Error obteniendo los datos: ", error))
    }, 3000);
  }
}