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
  client: any;

  constructor( private productsService: ProductsService, private culqi: CulqiService, private userService: UserService) {
      this.products = this.productsService.products;
      this.totalCart = localStorage.getItem('amount');
      this.userService.getUserProfile(JSON.parse(localStorage.getItem('email')) ).subscribe((response) => {
        this.user = response;
      });
      this.userService.currentAddress.subscribe((response) => {
        this.address = response;
      });
      this.userService.cardRegistered.subscribe((response) => {
        this.card = response;
        this.emailUser.setValue(this.card.emailUser);
        this.numberCard.setValue(this.card.numberCard);
        this.monthCard.setValue(this.card.monthCard);
        this.yearCard.setValue(this.card.yearCard);
        this.cvvCard.setValue(this.card.cvv);
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

  confirmClient() {
    this.client = {
      first_name: this.user['names'],
      last_name: this.user['lastName'],
      email: this.user['userEmail'],
      country_code: 'US',
      address: `${this.address['streetTypeCode']}. ${this.address['streetName']} ${this.address['streetNumber']}`,
      address_city: this.address['urbanizationName'],
      phone_number: '111111'};
    this.culqi.createClient(this.client).subscribe((response) => console.log(response));
  }


  createTokenOrder() {
    this.culqi.createOrder();
    this.endSteps = true;
  }

  endBuy() {
    const buy = {
      amount: localStorage.getItem('amount'),
      currency_code: 'PEN',
      email: localStorage.getItem('email'),
      source_id: localStorage.getItem('token')
    };

    this.culqi.createCharge(buy);
  }

  get emailUser() { return this.cardForm.get('emailUser'); }
  get numberCard() { return this.cardForm.get('numberCard'); }
  get cvvCard() { return this.cardForm.get('cvvCard'); }
  get monthCard() { return this.cardForm.get('monthCard'); }
  get yearCard() { return this.cardForm.get('yearCard'); }
}
