import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  /* FormGroup : Login */
  login: FormGroup

  /* Subcribirse a los datos de Entrada */
  subcripcion: Subscription;


  usuario = {
    email:"",
    pass: String
  }

  constructor(private _builder: FormBuilder) {}

  ngOnInit() {
    this.login = this._builder.group({
      email: ['', Validators.required],
      pass : ['', Validators.compose([ Validators.email, Validators.required])]
    })
    this.subcripcion = this.login.valueChanges.subscribe( texto =>{
      this.usuario = texto;
    });
  }

  ngOnDestroy() {
    this.subcripcion.unsubscribe();
  }

}
