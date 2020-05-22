import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getProductById(id) {
    this.productsService.getProduct(id).subscribe(
      response => {
        console.log(response);
        // this.products = response;
      }
    );
  }

}
