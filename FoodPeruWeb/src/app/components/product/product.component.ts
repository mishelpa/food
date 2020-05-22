import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: ActivatedRoute, private productsService: ProductsService) { }

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
