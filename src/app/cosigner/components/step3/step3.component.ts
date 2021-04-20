import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  private closeResult = '';

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

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  goToForm() {
    this.modalService.dismissAll();
    this.stepIndex = 1;
  }

  onSubmit(event: Event,type: any): any {
    event.preventDefault();

    switch(type) { 
      case 'location': { 
        this.modalService.dismissAll();
        this.showLocation = true;
        this.showCode = false;
        this.showNumber = false;
        this.showEntities = false;
        break; 
      }
      
      case 'number': { 
        this.showLocation = false;
        this.showCode = false;
        this.showNumber = true;
        this.showEntities = false;
        break; 
      }
      
      case 'entities': { 
        this.showLocation = false;
        this.showCode = false;
        this.showNumber = false;
        this.showEntities = true;
        break; 
      } 
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