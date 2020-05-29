import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CulqiService } from 'src/app/services/culqi/culqi.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {
products: any;

constructor(private culqiService: CulqiService, private productsService: ProductsService) {
this.products = this.productsService.products;
console.log(this.products);

}

product = [{
  description : 'Arroz Costeño',
  amount: 100
}];

/* userForm = new FormGroup({
    nameUser: new FormControl(''),
    lastnameUser: new FormControl (''),
    cardUser: new FormControl (''),
    loteUser: new FormControl(''),
    dptoUser: new FormControl (''),
  }); */

ngOnInit(): void {
  this.culqiService.initCulqi();
}

payment() {
  this.culqiService.payorder(this.product[0].description, this.product[0].amount);
}
}
