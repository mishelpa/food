import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export declare let Culqi;

@Injectable({
  providedIn: 'root'
})
export class CulqiService {

  tokenId: string;
  constructor(private http: HttpClient) {
    document.addEventListener ('payment_event', (token: any) => {
      this.tokenId = token.detail;
      console.log(this.tokenId);
    });
  }

  initCulqi() {
    Culqi.publicKey  = 'pk_test_WkOlOvuX4C3asoLB';
  }

  payorder(descriptionOrder: string, amount: number) {
    Culqi.settings ({
      title: 'FOOD PERÚ',
      currency: 'PEN',
      description: descriptionOrder,
      amount: amount * 100
    });

    Culqi.options({
      lang: 'auto',
      modal: true,
      installments: false,
      customButton: '',
      style: {
        maincolor: '#FF5500',
        buttontext: '#ffffff',
        maintext: '#4A4A4A',
        desctext: '#4A4A4A'
      }
    });
    Culqi.open();
  }
  open() {
    Culqi.open();
  }

  getToken() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + 'sk_test_3mWmJRwXPw7OfJJq');
    console.log(headers);
    return this.http.get('https://api.culqi.com/v2/tokens', {headers});
  }
}
