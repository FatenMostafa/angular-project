export class User {
   public id:string;
   public Name:string;
   public Password:string;
   public ConfirmPass:string;
   public Email:String;
   constructor(id,Name,password,ConfirmPassword,Email){
       this.id=id;
       this.Name=Name;
       this.Password=password;
       this.ConfirmPass=ConfirmPassword;
       this.Email=Email;

       }
}
