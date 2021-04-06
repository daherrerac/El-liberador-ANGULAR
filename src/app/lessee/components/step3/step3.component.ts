import { Component, OnInit } from '@angular/core';
import {NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

  closeResult = '';
  showCode = true;
  showLocation = false;
  showNumber = false;
  showEntities = false;
  validData = true;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event,type: any): any {
    event.preventDefault();

    switch(type) { 
      case 'location': { 
        this.modalService.dismissAll();
        this.showLocation = true;
        this.showCode = false;
         break; 
      } 
      case 'number': { 
        this.showLocation = false;
        this.showNumber = true;
         break; 
      } 
      case 'entities': { 
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
