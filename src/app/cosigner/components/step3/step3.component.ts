import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { VerifyIdentityServiceService } from '../../services/verify-identity-service.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  private closeResult = '';
  private formResults: any;

  public formQuestions = new FormGroup({
    userLocation: new FormControl('', [Validators.required]),
    userNumber: new FormControl('', [Validators.required]),
    userBank: new FormControl('', [Validators.required])
  });

  public formLocation = new FormGroup({
    userLocation: new FormControl('', [Validators.required])
  });
  public formNumber = new FormGroup({
    userNumber: new FormControl('', [Validators.required])
  });
  public formBank = new FormGroup({
    userBank: new FormControl('', [Validators.required])
  });

  public showCode = true;
  public showLocation = false;
  public showNumber = false;
  public showEntities = false;
  public validData = true;
  public stepIndex = 0;
  public formsData: any;
  public visibleIndex: number;
  public alert: boolean;

  constructor(private modalService: NgbModal, private verifyIndentityService: VerifyIdentityServiceService) {
    this.formResults = [];
    this.visibleIndex = 0;
  }

  ngOnInit(): void {
    this.buildForms();
  }

  goToForm() {
    this.modalService.dismissAll();
    this.stepIndex = 1;
  }

  buildForms() {
    this.formsData = this.verifyIndentityService.getMockQuestions()
  }

  saveResults(question: any) {
    if(question == undefined) this.alert = true;
    else {
      this.visibleIndex++;
      this.alert = false;
      this.formResults.push({
        respuesta: {
          id: question[0],
          texto: question[1]
        }
      });

      console.log(this.formResults)
    }
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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