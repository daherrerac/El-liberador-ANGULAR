import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private consultForm: any;
  private closeResult = '';
  
  public title: string;
  public documentNumber: number;
  public requestNumber: number;
  public result: string[];
  public resultText: string;
  public helpCosignerForm = new FormGroup({
    text: new FormControl('', [Validators.required])
  })
  public alert: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
    this.title = 'Detalle de tu solicitud';
    this.documentNumber = 0;
    this.requestNumber = 0;
    this.result = ['ASEGURABLE', 'NO ASEGURABLE', 'EN ESTUDIO'];
    this.resultText = '';
  }

  ngOnInit(): void {
    this.consultForm = JSON.parse(localStorage.getItem('consultForm'))

    console.log(this.consultForm['documentNumber'], this.consultForm['requestNumber'])
    if(this.consultForm == undefined || this.consultForm == '') this.router.navigate(['consultar-solicitud'])
    else {
      this.documentNumber = this.consultForm['documentNumber']
      this.requestNumber = this.consultForm['requestNumber']
      this.getRequestStatus(this.documentNumber, this.requestNumber)
    }
  }

  getRequestStatus(documentNumber: number, requestNumber: number) {
    if(this.requestNumber == 12345) this.resultText = this.result[0];
    else if(this.requestNumber == 12346) this.resultText = this.result[1];
    else if(this.requestNumber == 12347) this.resultText = this.result[2];
    else this.resultText = '';
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  shareRequest(type: string) {
    console.log(type)
  }

  sendHelpForm() {
    console.log()
    
    if(this.helpCosignerForm.status == 'INVALID') this.alert = true;
    else this.alert = false;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}