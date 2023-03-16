import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario : FormGroup = this.fb.group({
    nombre : ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern) ]],
    email : ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)  ]],
    username : ['', [Validators.required, this.validatorService.noPuedeSerStrider  ]],
    password : ['', [Validators.required, Validators.minLength(6)  ]],
    password2 : ['', [Validators.required, this.validatorService.noPuedeSerStrider  ]],
  }, {
    Validators : [ this.validatorService.camposIguales('password', 'password2') ]
  });


  constructor(private validatorService : ValidatorService, private fb : FormBuilder) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre : 'Rodrigo Ruiz',
      email : 'test1@test.com',
      username : 'yoresroy'
    });
  }


  campoNoValido( campo : string ){
    return this.miFormulario.get(campo)?.invalid
                && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();

  }

}
