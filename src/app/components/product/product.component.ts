import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  listProduct: any = [];
  qtyProduct: number[] = [1, 2, 3, 4, 5, 6];
  product: any;
  displayAddProductModal: boolean = false;

  constructor(
    private routerActive: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    private productsService: ProductsService) { }

  qtyForm = this.fb.group({
    qtySelected: []
  });

  ngOnInit(): void {
    const id = this.routerActive.snapshot.params['id'];
    console.log(id);

    this.getProductById(id);
  }

  getProductById(code) {
    this.productsService.getProduct(code).subscribe(
      response => {
        // this.product = JSON.parse(response.body);
        this.product = response;
        console.log(response);
      }
    );
  }

  addToCart(product) {
    // product.quantity = this.qtyForm.value;
    this.displayAddProductModal = true;
    this.productsService.addListProducts(product, parseInt(this.qtyForm.value.qtySelected));
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  closeAddProductModal() {
    this.displayAddProductModal = false;
  }
}
