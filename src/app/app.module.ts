import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsFromApiComponent } from './ProductSComponent/products-from-api/products-from-api.component';
import { ProductDetailsComponent } from './ProductSComponent/product-details/product-details.component';
import { AboutUsComponent } from './Content/about-us/about-us.component';
import { PageNotFoundComponent } from './Content/page-not-found/page-not-found.component';
import { FooterComponent } from './Content/footer/footer.component';
import { HeaderComponent } from './Content/header/header.component';
import { MainComponent } from './Content/main/main.component';
import { LoginComponent } from './Content/login/login.component';
import { LocalStorageService } from './Services/local-storage.service';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { CartComponent } from './ProductSComponent/cart/cart.component';
import { ProductCategoryComponent } from './Content/product-category/product-category.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
// import {Ng2SearchPipeModule} from 'ngx-search';  
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Product } from './ViewModel/product';
import {ViewChild} from '@angular/core';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsFromApiComponent,
    ProductDetailsComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
   CartComponent,
   ProductCategoryComponent,
   RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    NgxPaginationModule ,
    FilterPipeModule,
    ReactiveFormsModule
    // Ng2SearchPipeModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
