import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public title: string;
  public documentNumber: number;
  public requestNumber: number;
  public result: string[];
  public resultText: string;

  constructor(private route: ActivatedRoute) {
    this.title = 'Detalle de tu solicitud de arrendamiento';
    this.documentNumber = 0;
    this.requestNumber = 0;
    this.result = ['ASEGURABLE', 'NO ASEGURABLE', 'EN ESTUDIO'];
    this.resultText = '';
  }

  ngOnInit(): void {
    this.documentNumber = this.route.snapshot.params.documentNumber;
    this.requestNumber = this.route.snapshot.params.requestNumber;
    
    this.getRequestStatus(this.documentNumber, this.requestNumber)
  }

  getRequestStatus(documentNumber: number, requestNumber: number) {
    if(this.requestNumber == 12345) this.resultText = this.result[0];
    else if(this.requestNumber == 12346) this.resultText = this.result[1];
    else if(this.requestNumber == 12347) this.resultText = this.result[2];
    else this.resultText = '';
  }
}