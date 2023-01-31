import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  
  miFormulario: FormGroup = this.formBuilder.group({
    nombre      : [  , [Validators.required, Validators.minLength(3)]  ],
    favoritos : this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['FIFA 2022', Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required)
  
  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}


  campoEsValido(campo: string){
    return  this.miFormulario.controls[campo].touched
    && this.miFormulario.controls[campo].errors;
  }

  agregarFavorito(){
    if ( this.nuevoFavorito.invalid ) { return ;}
    this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    //this.favoritosArr.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  borrar(i : number){
    this.favoritosArr.removeAt(i);
    console.log("BORRAR");

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
