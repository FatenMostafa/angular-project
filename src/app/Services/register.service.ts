import { Injectable } from '@angular/core';
import { User } from '../ViewModel/user';


import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
newUser:User;


  constructor(private httpClient:HttpClient) { }
 
  AddnewUse(newUser):void{
    console.log(newUser);
    const headersConfig ={headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    }

    )};
console.log(`${environment.API_URL2}Account`);
     this.httpClient.post(`${environment.API_URL2}Account`, newUser).subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      
      console.log("Error", error);
      
      });
    
  }
}
