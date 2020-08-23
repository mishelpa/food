import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  public products: any[];
  public numberPage: string;

  public customerName = '';

  constructor(private productsService: ProductsService, private router: Router) {}
  search = new FormControl('');
  filtroValue = '';

  ngOnInit(): void {
    this.getAllProducts();
    this.search.valueChanges
    .pipe(
      debounceTime(100)
    )
    .subscribe(value => this.filtroValue = value
    );
  }


  getAllProducts() {
    this.productsService.getListProducts().subscribe(
      response => {
        // console.log(JSON.parse(response.body));
         this.products = JSON.parse(response.body);
        // this.products = response.body;
        console.log(this.products);

      }
    );
  }

  getCode(code) {
    this.router.navigate(['/products', code]);
  }

}
