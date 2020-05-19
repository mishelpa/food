import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  constructor() { }

  userForm = new FormGroup({
    nameUser: new FormControl(''),
    lastnameUser: new FormControl (''),
    cardUser: new FormControl (''),
    loteUser: new FormControl(''),
    dptoUser: new FormControl (''),
  });

  ngOnInit(): void {
  }

}
