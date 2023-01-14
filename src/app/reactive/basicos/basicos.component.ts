import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  /*

  miFormulario: FormGroup = new FormGroup({
    nombre        : new FormControl('RTX 4080ti'),
    precio        : new FormControl(1500),
    existencias   : new FormControl(5),
  });

  */

  miFormulario: FormGroup = this.formBuilder.group({
    nombre      : [ 'RTX 4080ti' ],
    precio      : [ 0 ],
    existencias : [ 0 ],
  })

  constructor( private formBuilder: FormBuilder ) { }





}
