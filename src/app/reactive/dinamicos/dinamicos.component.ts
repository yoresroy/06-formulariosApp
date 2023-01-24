import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  
  miFormulario: FormGroup = this.formBuilder.group({
    nombre      : [  , [Validators.required, Validators.minLength(3)]  ]
  })
  
  constructor(private formBuilder: FormBuilder) {}


  campoEsValido(campo: string){
    return  this.miFormulario.controls[campo].touched
    && this.miFormulario.controls[campo].errors;
  }

  guardar(){
    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

}
