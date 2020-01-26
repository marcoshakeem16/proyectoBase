import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-simple',
  templateUrl: './form-simple.component.html',
  styleUrls: ['./form-simple.component.css']
})
export class FormSimpleComponent implements OnInit {

  /* Variable para Formulario Simple (FormControl) */
  name = new FormControl('', Validators.required);

  /* Variable para Formulario Multiple (FormGroup) */
  login = new FormGroup({
    username: new FormControl('', Validators.required),
    pass: new FormControl(''),
  })

  /* Variable para el Formulario Multiple (FormBuilder) */
  informacion = this.fb.group({
    nombre:['', Validators.required],
    apellido:['', Validators.required]
  });

  /* Usuario datos */
  usuario = {
    username:"",
    pass:""
  };

  /* Informacion */
  info = {
    nombre:"",
    apellido:"",
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
     this.login.valueChanges.subscribe(usuario => {
       this.usuario = this.login.value;
    });
    this.informacion.valueChanges.subscribe(informacion => {
      this.info = this.informacion.value;
    });
  }

  send(){
    console.log("Nombre: " + this.name.value);
  }

  sendGroup(){
    console.log("Username: " + this.usuario.username);
    console.log("Password: " + this.usuario.pass);
  }

  sendGroupBuilder() {
    console.log("Nombre: " + this.info.nombre);
    console.log("Apellido: " + this.info.apellido);
  }

}
