import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: any;

  constructor(private router: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.getProductById(id);
  }

  getProductById(id) {
    this.productsService.getProduct(id).subscribe(
      response => {
        console.log(response);
        this.product = response;
      }
    );
  }

}
