import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  productUrl : string = "https://exp.kkant.repl.co/products.json"
  constructor( private http:HttpClient) { }

  getProduct(){
    return this.http.get(this.productUrl).pipe(map((res:any)=>{
      return res;
    }))
  }
}
