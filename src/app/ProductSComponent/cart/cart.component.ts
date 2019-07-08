import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { Product } from 'src/app/ViewModel/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
 
@Output() TotalPriceChanged: EventEmitter<number>;
 
  orderTotalPrice:number;
count:number;

productList:Product[]=[];
  constructor(private Localstorage:LocalStorageService ) {
   this.orderTotalPrice=0;
   this.count=1;
   }
   plus(price:number,ItemsCount:number):void
   {
    this.orderTotalPrice += price ;
    ItemsCount++;
    this.count= ItemsCount;
  }

    minus(price:number,ItemsCount:number):void
   {
    this.orderTotalPrice -= price ;
    this.count= ItemsCount-1;
    console.log("aaa");
  }
   calcPrice(price:number,ItemsCount:number):void
   {
   // this.productList= this.Localstorage.retrieveLocalStorage();
   this.orderTotalPrice += price;
    // this.TotalPriceChanged.emit(this.orderTotalPrice);
    // this.orderTotalPrice=8;
    console.log(ItemsCount);
//    return this.orderTotalPrice;
    
   }
   

 
  ngOnInit() {
   this.productList= this.Localstorage.retrieveLocalStorage();
   this.productList.forEach(element => {
   this.orderTotalPrice += element.Price;
      console.log(this.orderTotalPrice);
   });}
  //  ngOnChanges(changes: SimpleChanges):void{
  //   this.productList.forEach(element => {
  //     this.orderTotalPrice += element.Price ;
  //        console.log(this.orderTotalPrice);
  //  });
  // }
}

