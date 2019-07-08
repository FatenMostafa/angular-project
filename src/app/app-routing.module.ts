import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsFromApiComponent } from './ProductSComponent/products-from-api/products-from-api.component';
import { ProductDetailsComponent } from './ProductSComponent/product-details/product-details.component';
import { CartComponent } from './ProductSComponent/cart/cart.component';
import { HeaderComponent } from './Content/header/header.component';
 import { ProductCategoryComponent } from './Content/product-category/product-category.component';
import { AboutUsComponent } from './Content/about-us/about-us.component';
import { PageNotFoundComponent } from './Content/page-not-found/page-not-found.component';
import { LoginComponent } from './Content/login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home',component:ProductsFromApiComponent},
  {path:'home/:cartNum',component:HeaderComponent},
  {path:'productsCategory/:ID',component:ProductCategoryComponent},
  {path: 'product/:prdID', component: ProductDetailsComponent},
  //{path: 'refresh/:prdID', component: HeaderComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'productsFromApi/1',component:ProductsFromApiComponent},
  
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
