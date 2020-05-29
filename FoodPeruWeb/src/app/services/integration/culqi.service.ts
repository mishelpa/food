import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

export class CulqiService {

    constructor() {
    }
    async getToken(){
    console.log('aqui');
    try {
      await window.Culqi.createToken();
      console.log(window.Culqi.token);
    } catch (error) {
      console.log(error);
      
    }
   
      

    }
}