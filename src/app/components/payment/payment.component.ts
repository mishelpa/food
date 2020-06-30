import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { CulqiService } from '../../services/integration/culqi.service';
import { UserService } from 'src/app/services/user/user.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  products: any;
  totalCart: any;
  user: any;
  address: any;
  card: any;
  cardMain: any;
  addressMain: any;
  quantityCart: any;
  endSteps = false;

  constructor( private productsService: ProductsService, private culqi: CulqiService, private userService: UserService) {
      this.products = this.productsService.products;
      this.totalCart = localStorage.getItem('amount');
      this.userService.getUserProfile(JSON.parse(localStorage.getItem('email')) ).subscribe((response) => {
        this.user = response;
      });
      this.userService.getAddress().subscribe((response) => {
        this.address = response['address'].filter((ele) => ele.userDNI === localStorage.getItem('dni'));
      });
      this.userService.currentCards.subscribe((response) => {
        this.card = response;
      });
      this.quantityCart = localStorage.getItem('cart');
    }

    cardForm = new FormGroup({
      emailUser: new FormControl('', [Validators.required, Validators.email]),
      nameTitular: new FormControl('', [Validators.required]),
      lastNameTitular: new FormControl('', [Validators.required]),
      numberCard: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      cvvCard: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      monthCard: new FormControl('', [Validators.required]),
      yearCard: new FormControl ('', [Validators.required]),
    });

  ngOnInit(): void {

  }

  saveAddress(index) {
    console.log(index);
  }

  saveCard(card) {
    console.log(card);
    this.addressMain = {
      card_number: card.numberCard,
      cvv: card.cvv,
      expiration_month: card.monthCard,
      expiration_year: card.yearCard,
      email: card.emailUser
    };
    this.emailUser.setValue(card.emailUser);
    this.numberCard.setValue(card.numberCard);
    this.monthCard.setValue(card.monthCard);
    this.yearCard.setValue(card.yearCard);
    // this.culqi.createOrder();
  }

  createTokenOrder() {
    this.culqi.createOrder();
    this.endSteps = true;
  }

  get emailUser() { return this.cardForm.get('emailUser'); }
  get numberCard() { return this.cardForm.get('numberCard'); }
  get cvvCard() { return this.cardForm.get('cvvCard'); }
  get monthCard() { return this.cardForm.get('monthCard'); }
  get yearCard() { return this.cardForm.get('yearCard'); }
}
