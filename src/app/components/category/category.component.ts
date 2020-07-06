import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { element } from 'protractor';

declare const $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  allCategories: any[];
  subCategory: any[];
  allSubCategory: any[];
  arrayProduct: any[];
  newArray: any [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategoryProducts().subscribe(element => this.allCategories = element);
    this.productsService.getSubCategories().subscribe(element => this.allSubCategory = element)
    this.productsService.getproductSubCategory().subscribe((element) => this.newArray = element)


  }
  category(value) {
    console.log(value);
    this.subCategory = this.allSubCategory.filter((element) => element.category === value)
  }
  product(value) {
    this.arrayProduct = this.newArray.filter(element => element.subCategory === value)
    console.log(this.arrayProduct);
    const obj = {... this.arrayProduct}
    console.log(obj);
    
    this.productsService.getproduct(this.arrayProduct)



  }
}
