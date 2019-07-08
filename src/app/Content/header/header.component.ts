import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Category } from 'src/app/ViewModel/category';
import { CategoryFromApiService } from 'src/app/Services/category-from-api.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { ProductCategoryComponent } from '../product-category/product-category.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categoryList: Category[] = [];
  @Input() myList
  cartNum:number;
  SelectedCatId:number;
  searchText;
  @ViewChild(ProductCategoryComponent) ProductCategoryComponent:ProductCategoryComponent;
  constructor(private CatFrmApi:CategoryFromApiService,private localStorage:LocalStorageService) {
  
   }

  ngOnInit() {
    this.CatFrmApi.getAllCategory()
    .subscribe((data) => {
    this.categoryList = data;
    //console.log(this.categoryList);
     // const selPrdID = this.activatedRoute.snapshot.params['cartNum'];
    });
      this.cartNum= this.localStorage.retrieveLocalStorage().length;
      //this.cartNum=this.localStorage.getCartNum();
    }

}
