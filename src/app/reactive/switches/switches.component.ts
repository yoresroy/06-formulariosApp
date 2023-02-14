import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {

  persona = {
    genero : 'F',
    notificaciones: true
  }

  
  miFormulario : FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [ true , Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });


  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.patchValue( this.persona );
    this.miFormulario.reset(this.persona);

    /*
    this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {
      console.log(newValue)
    });
    */

    this.miFormulario.valueChanges.subscribe( form => {
      delete  form.con
      this.persona = form
      console.log(form)
    });

  }

  guardar(){
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;
    console.log(formValue);
  }

}
