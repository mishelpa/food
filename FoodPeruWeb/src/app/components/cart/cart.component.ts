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
  quantityCart: number = 0;
  totalCart: number = 0;
  constructor(private productsService: ProductsService) {
    this.productsCart = this.productsService.products;
    this.productsService.products.forEach(product => {
      this.quantityCart += product.quantity;
      this.totalCart += (product.quantity * product.price);
    });
    localStorage.setItem('product', JSON.stringify(this.productsCart));
  }

  qty = new FormControl('');

ngOnInit(): void {
  console.log(this.quantityCart);
  console.log(JSON.parse(localStorage.getItem('product')));
  }

}
