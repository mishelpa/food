import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import {CulqiService } from '../../services/integration/culqi.service';
import { from } from 'rxjs';
// import { CulqiService } from 'ng-culqi';
declare var $: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  products: any;
  product = [{
    description : 'FOOD PERÚ',
    amount: 100
  }];
  constructor( private productsService: ProductsService, private culqi: CulqiService ) {
      this.products = this.productsService.products;
    }

  ngOnInit(): void {
    this.culqi.initCulqi();
  }

  payment() {
    this.culqi.payorder(this.product[0].description, this.product[0].amount);
  }

  createChargeCart() {
      const obj = {
        amount: JSON.parse(localStorage.getItem('amount')) * 100,
        currency_code: 'PEN',
        email: JSON.parse(localStorage.getItem('email')),
        source_id: JSON.parse(localStorage.getItem('token'))
      };

      this.culqi.createCharge(obj).subscribe();
  }
}
