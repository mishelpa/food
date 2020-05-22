import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  public products: any[];
  public numberPage: string;
  constructor(private productsService: ProductsService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts() {
    this.productsService.getListProducts().subscribe(
      response => {
        console.log(response);
        this.products = response.products;
      }
    );
  }

  getId(id) {
    this.router.navigate(['/products', id]);
  }

}
