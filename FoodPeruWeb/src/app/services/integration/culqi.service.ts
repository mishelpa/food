import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
export declare let Culqi;

@Injectable({
    providedIn: 'root'
  })

export class CulqiService {
  token_id: string;

  constructor( private http: HttpClient) {
    document.addEventListener ('payment_event', (token: any) => {
    this.token_id = token.detail;
    localStorage.setItem('token', JSON.stringify(this.token_id));
  });
}

    initCulqi() {
      Culqi.publicKey  = 'pk_test_WkOlOvuX4C3asoLB';
    }

    payorder(description: string, amount: number) {
      Culqi.settings ({
        title: 'Culqi Store',
        currency: 'PEN',
        description,
        amount: amount * 100
      });

      Culqi.options({
        lang: 'auto',
        modal: true,
        installments: false,
        customButton: '',
    });
      Culqi.open();

    }

    open() {
      Culqi.open ();
    }

    createCharge(obj) {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('Authorization', 'Bearer ' + 'sk_test_3mWmJRwXPw7OfJJq');
      return this.http.post('https://api.culqi.com/v2/charges', obj, {headers});
    }
}
