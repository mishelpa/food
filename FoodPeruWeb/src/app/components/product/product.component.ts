import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  listProduct: any = [];
  product: any;
  displayAddProductModal: boolean = false;

  constructor(
    private routerActive: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    const id = this.routerActive.snapshot.params['id'];
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

  addToCart(product) {
    this.displayAddProductModal = true;
    this.productsService.addListProducts(product);
    console.log(this.productsService.products);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  closeAddProductModal() {
    this.displayAddProductModal = false;
  }
}
