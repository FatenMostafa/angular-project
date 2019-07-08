import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/ViewModel/product';
import { ProductFromApiService } from 'src/app/Services/product-from-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct: Product;
  cartNum:number;
  constructor(private prdFrmApiService: ProductFromApiService
    , private activatedRoute: ActivatedRoute
    , private location: Location,private localStorageService: LocalStorageService) { this.cartNum=0;}
 
  ngOnInit() {
    const selPrdID = this.activatedRoute.snapshot.params['prdID'];
    this.prdFrmApiService.getProductByID(selPrdID)
    .subscribe((data) => {
      this.selectedProduct = data;
    },
    (err) => {
      console.log(err);
    });
}
  

onBuyClick(selPrdID:number): void {
  this.cartNum++ ;
  }
  goBack() {
    this.location.back();
  }
  
  addToCart(selectedProduct:Product,NeededNum:number):void{   
    this.localStorageService.storeOnLocalStorage(selectedProduct);
    //this.cartNum= this.localStorageService.getCartNum();
  }
  
}
