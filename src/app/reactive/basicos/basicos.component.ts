import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit{

  /*

  miFormulario: FormGroup = new FormGroup({
    nombre        : new FormControl('RTX 4080ti'),
    precio        : new FormControl(1500),
    existencias   : new FormControl(5),
  });

  */

  miFormulario: FormGroup = this.formBuilder.group({
    nombre      : [  , [Validators.required, Validators.minLength(3)]  ],
    precio      : [  , [Validators.min(0), Validators.required] ],
    existencias : [   , [Validators.min(0), Validators.required] ],
  })

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.setValue({
        nombre : 'fwfwewe',
        precio:1000
      })
  }

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
