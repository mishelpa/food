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

  constructor(
    // private culqiSrv: CulqiService
    private culqi: CulqiService
    ) { }

  ngOnInit(): void {
    // this.culqiSrv.configCulqi('food Peru', 'pk_test_WkOlOvuX4C3asoLB');

  }

  getCredentials(e){
    e.preventDefault();
    
    this.culqi.getToken()

    
  }

}
