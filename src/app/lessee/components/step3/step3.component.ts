import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: Event): any {
    event.preventDefault();

  }

}
