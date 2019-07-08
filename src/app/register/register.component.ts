import { Component, OnInit } from '@angular/core';
import { User } from '../ViewModel/user';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser:User;

  constructor(private registered:RegisterService) { 
    //this.newUser.id=this.newUser.Name;
    this.newUser=new User("","","","","");
  }

  ngOnInit() {
  }
  Adduser(){
   this.newUser.id=this.newUser.Name;
   console.log(this.newUser.id);
  this.newUser.Email='saad@getMaxListeners.com';
    console.log(this.newUser);

    this.registered.AddnewUse(this.newUser);
    console.log("created");
    
    
  }
  }
