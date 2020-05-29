import { Component, OnInit } from '@angular/core';
import {CulqiService } from '../../services/integration/culqi.service';
import { from } from 'rxjs';
// import { CulqiService } from 'ng-culqi';
declare var $: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  product = [{
    description : "Polo Culqi Lover",
    amount: 100
  }];
  constructor(
    // private culqiSrv: CulqiService
    private culqi: CulqiService
    ) { }

  ngOnInit(): void {
    // this.culqiSrv.configCulqi('food Peru', 'pk_test_WkOlOvuX4C3asoLB');
    this.culqi.initCulqi();
  }

  payment(){
    this.culqi.payorder(this.product[0]["description"],this.product[0]["amount"]);
  }

  // getCredentials(e){
  //   e.preventDefault();
    
  //   this.culqi.getToken()

    
  // }

}
