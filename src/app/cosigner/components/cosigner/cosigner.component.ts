import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cosigner',
  templateUrl: './cosigner.component.html',
  styleUrls: ['./cosigner.component.scss']
})
export class CosignerComponent implements OnInit {
  public title: string;
  public codeForm = new FormGroup({
    code: new FormControl('', [Validators.required])
  })

  constructor(private router: Router) {
    this.title = "Registrarme";
  }

  ngOnInit(): void {}

  submitForm(event: Event) {
    if(this.codeForm.valid) this.router.navigate(['codeudor/datos'])
    else this.codeForm.markAllAsTouched();
  }
}
