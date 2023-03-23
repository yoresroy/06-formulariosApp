import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario : FormGroup = this.fb.group({
    nombre : ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern) ]],
    email : ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)  ], [this.emailValidator] ],
    username : ['', [Validators.required, this.validatorService.noPuedeSerStrider  ]],
    password : ['', [Validators.required, Validators.minLength(6)  ]],
    password2 : ['', [Validators.required, this.validatorService.noPuedeSerStrider  ]],
  }, {
    Validators : [ this.validatorService.camposIguales('password', 'password2') ]
  });


  get emailErrorMsg() : string {

    const errors = this.miFormulario.get('email')?.errors;

    if ( errors?.['required'] ) {
      return 'Email es obligatorio';
    } else if ( errors?.['pattern'] ) {
      return 'El valor ingresado no tiene formato de correo electrónico';
    } else if ( errors?.['emailTomado'] ) {
      return 'Email ya fue tomado';
    }
    
    return '';
  }


  constructor(
    private validatorService : ValidatorService,
    private fb : FormBuilder,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre : 'Rodrigo Ruiz',
      email : 'test1@test.com',
      username : 'yoresroy',
      password : '123456',
      password2 : '123456',
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
