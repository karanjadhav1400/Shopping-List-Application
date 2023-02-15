import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterShipping'
})
export class FilterPipe implements PipeTransform {

  transform(productList: any, filterText: string){
    if(productList.length === 0 || filterText === ''){
      return productList;
    }
    else{
      return productList.filter((ship:any)=>
      {
        return ship.isFreeShipping.toString() === filterText
      })
    }
    
  }

}
