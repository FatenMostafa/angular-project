import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductFromApiService } from 'src/app/Services/product-from-api.service';
import { Product } from 'src/app/ViewModel/product';

@Component({
  selector: 'app-products-from-api',
  templateUrl: './products-from-api.component.html',
  styleUrls: ['./products-from-api.component.css']
})
export class ProductsFromApiComponent implements OnInit {
  productList: Product[] = [];
  searchText;
  constructor(private service:ProductFromApiService) {
    this.service.getAllProducts().subscribe(data =>{  
     this.productList=data;
    });
  }

     ngOnInit() {  
     
        
     }  
     
       
   }  