import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
export declare let Culqi;

@Injectable({
    providedIn: 'root'
  })

export class CulqiService {
  tokenId: string;

  constructor( private http: HttpClient) {
    document.addEventListener ('payment_event', (token: any) => {
    this.tokenId = token.detail;
    localStorage.setItem('token', JSON.stringify(this.tokenId));
  });
}

    initCulqi() {
      Culqi.publicKey  = 'pk_test_WkOlOvuX4C3asoLB';
    }

    payorder(description: string, amount: number) {
      Culqi.settings ({
        title: 'FOOD PERÚ',
        currency: 'PEN',
        description: '',
        amount: ''
      });

      Culqi.options({
        lang: 'auto',
        modal: true,
        installments: false,
        customButton: '',
        style: {
          logo: 'https://culqi.com/LogoCulqi.png',
          maincolor: '#FF5500',
          buttontext: '#ffffff',
          maintext: '#4A4A4A',
          desctext: '#4A4A4A'
        }
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
