import { Component, OnInit, OnChanges} from '@angular/core';
import { ProductFromApiService } from 'src/app/Services/product-from-api.service';
import { Product } from 'src/app/ViewModel/product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit,OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  productList: Product[] ;
   
    constructor(private ProductFromApiService:ProductFromApiService,private activatedRoute: ActivatedRoute) {
      this.productList=[];
    const CatId = this.activatedRoute.snapshot.params['ID'];
    this.ProductFromApiService.getProductByCatID(CatId).subscribe(data =>{  

      this.productList=data;
      
      console.log(this.productList);
  });     
    }
    OnChanges():void{
      

      console.log(this.productList);
    const CatId = this.activatedRoute.snapshot.params['ID'];
    this.ProductFromApiService.getProductByCatID(CatId).subscribe(data =>{  
    this.productList=data;
  });
  
}}