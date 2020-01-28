import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { forbiddenNameValidator, forbiddenApellidoValidator } from "../custom-validators/forbiddenNameValidator";

@Component({
  selector: 'app-form-simple',
  templateUrl: './form-simple.component.html',
  styleUrls: ['./form-simple.component.css']
})
export class FormSimpleComponent implements OnInit {

  /* Variable para Formulario Simple (FormControl) */
  nameForm = new FormControl('', Validators.required);

  /* Variable para Formulario Multiple (FormGroup) */
  login = new FormGroup({
    username: new FormControl('', Validators.required),
    pass: new FormControl('',[Validators.required,Validators.minLength(4)]),
  })

  /* Variable para el Formulario Multiple (FormBuilder) */
  informacion = this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/relajado/i)]],
    apellido:['', [Validators.required, Validators.maxLength(10), forbiddenApellidoValidator(/ayala/i)]]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
     this.login.valueChanges.subscribe(usuario => {
      /* console.log(this.username.value);
      *  console.log(this.login);
      */
      /* Suscrito a este evento podemos escuchar todos los cambio que introduce
      *  el usuario desde el input.
      */
    });
    this.informacion.valueChanges.subscribe(informacion => {
      /* Suscrito a este evento podemos escuchar todos los cambio que introduce
       *  el usuario desde el input.
      */
     console.log(this.apellido.errors);
    });
  }

  send(){
    console.log("Nombre: " + this.name.value);
  }

  sendGroup(){
    console.log("Username: " + this.username.value);
    console.log("Password: " + this.pass.value);
  }

  sendGroupBuilder() {
    console.log("Nombre: " + this.nombre.value);
    console.log("Apellido: " + this.apellido.value);
  }

  /* Permite recuperar el control form en el Template */
  get name () { return this.nameForm};
  /* Permite recuperar los control form del FormGroup, en el Template  */
  get username () { return this.login.get('username')};
  get pass () { return this.login.get('pass')};
  /* Permite recuperar los control form del FormBuilder, en el Template */
  get nombre () { return this.informacion.get('nombre')};
  get apellido () { return this.informacion.get('apellido')};

}
