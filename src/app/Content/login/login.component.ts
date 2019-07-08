import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn:boolean=false;
  public globalResponse: any;
  loginForm:FormGroup;
  constructor(private Auth:LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Name:  ['', [Validators.required]],
      Password:['',[Validators.required]],
    });
  }
  Login(){
    let user=this.loginForm.value;
    this.isLoggedIn=false;
    this.Auth.removeToken();
    console.log(user);
    this.Auth.ValidateUser(user).subscribe((res)=>{
      this.globalResponse=res;
      console.log(this.globalResponse);
      console.log("valid User");
    },
  (err)=>{
    console.log(err);
  },
  ()=>{
    this.Auth.storeToken(this.globalResponse.access_token);
  }
);
this.isLoggedIn=true;
}
}