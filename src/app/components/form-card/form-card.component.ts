import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CulqiService } from 'src/app/services/integration/culqi.service';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  monthArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  yearArray: number[] = [];

  constructor(private culqi: CulqiService, public fb: FormBuilder) { }

  cardForm = new FormGroup({
    emailUser: new FormControl('', [Validators.required, Validators.email]),
    numberCard: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    cvvCard: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    monthCard: new FormControl('', [Validators.required]),
    yearCard: new FormControl ('', [Validators.required]),
  });



  ngOnInit(): void {
    for (let i = 2020; i < 2041; i++) {
      this.yearArray.push(i);
    }
  }

  createTokenOrder(a) {
    this.culqi.createOrder();
    console.log(a);
  }

  validateCard(e) {

      e.target.value = e.target.value
    .replace(/\W/gi, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();

  }

  get emailUser() { return this.cardForm.get('emailUser'); }
  get numberCard() { return this.cardForm.get('numberCard'); }
  get cvvCard() { return this.cardForm.get('cvvCard'); }
  get monthCard() { return this.cardForm.get('monthCard'); }
  get yearCard() { return this.cardForm.get('yearCard'); }
}
