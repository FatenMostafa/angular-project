import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
public apiUrl:string="http://localhost:59825/token";
  constructor(private httpClient:HttpClient) { }
  ValidateUser(User:any)
  {
    var userDate="username="+User.Name+"&password="+User.Password+"&grant_type=password";

    var reqHeader=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

return this.httpClient.post(this.apiUrl,userDate,{headers:reqHeader});

  }
  public isAuthentcated():boolean{
    return this.getToken()!==null;
  }
  storeToken(token:string){
    localStorage.setItem("token",token);
  }
  getToken(){
    return localStorage.getItem("token");
  }
  removeToken()
  {
    return localStorage.removeItem("token");
  }
}

