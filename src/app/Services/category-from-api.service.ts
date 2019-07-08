import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../ViewModel/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryFromApiService {

  constructor(private httpClient:HttpClient) {

  }
  getAllCategory(): Observable <Category[]> {
   return (this.httpClient
   .get <Category[]>(`${environment.API_URL2}showcategory`));
  }

  getCategoryByID(catID: number): Observable <Category> {
   return this.httpClient
   .get <Category>(`${environment.API_URL2}showcategory/${catID}`);
  }
}
