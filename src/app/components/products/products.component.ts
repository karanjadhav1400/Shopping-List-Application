import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'
import { CartapiService } from 'src/app/services/cartapi.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList:any;
  totalLength:any;
  page: number = 1;
  filterText:string = '';  //Filter
  constructor(private api:ApiService,
    private cartApi:CartapiService){ }


  ngOnInit(): void{
    this.api.getProduct().subscribe(res=>{
      this.productList=res.products; 
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
    })
    
  }
  addtoCart(item:any){
    this.cartApi.addToCart(item);
  }
   

}
