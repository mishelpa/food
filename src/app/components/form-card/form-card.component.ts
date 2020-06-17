import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CulqiService } from 'src/app/services/integration/culqi.service';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  constructor(private culqi: CulqiService) { }

  cardForm = new FormGroup({
    emailUser: new FormControl('', [Validators.required, Validators.email]),
    numberCard: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    cvvCard: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    monthCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(2), Validators.maxLength(2)]),
    yearCard: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(4), Validators.maxLength(4)]),
  });

  ngOnInit(): void {
  }

  createTokenOrder(a) {
    this.culqi.createOrder();
    console.log(a);
  }

  get emailUser() { return this.cardForm.get('emailUser'); }
  get numberCard() { return this.cardForm.get('numberCard'); }
  get cvvCard() { return this.cardForm.get('cvvCard'); }
  get monthCard() { return this.cardForm.get('monthCard'); }
  get yearCard() { return this.cardForm.get('yearCard'); }
}
