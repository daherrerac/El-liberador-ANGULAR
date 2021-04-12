import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banner-arrendatario',
  templateUrl: './banner-arrendatario.component.html',
  styleUrls: ['./banner-arrendatario.component.scss']
})
export class BannerArrendatarioComponent implements OnInit {

  encabezado!:string;
  message$: any;
  subscription!: Subscription;

  constructor() {
    this.encabezado ='Datos del Arrendatario'
   }

  ngOnInit(): void {
  }

}
