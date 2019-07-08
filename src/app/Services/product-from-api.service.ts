import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../ViewModel/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductFromApiService {

  constructor(private httpClient:HttpClient) {

   }
   getAllProducts(): Observable <Product[]> {
    return (this.httpClient
    .get <Product[]>(`${environment.API_URL}Products`));
   }

   getProductByID(prdID: number): Observable <Product> {
    return this.httpClient
    .get <Product>(`${environment.API_URL}Products/${prdID}`);
   }
  

   getProductByCatID(CatID: number): Observable <Product[]> {
    return this.httpClient
    .get <Product[]>(`${environment.API_URL2}productsCategory/${CatID}`);
   }
}
