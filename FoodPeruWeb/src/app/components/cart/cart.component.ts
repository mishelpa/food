import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productsCart: any[] = [];
  constructor(private productsService: ProductsService) {
    this.productsCart = this.productsService.products;
  }

  qty = new FormControl('');

ngOnInit(): void {
    console.log(this.productsCart);
  }

ver() {
    console.log(this.qty.value);

  }
}
