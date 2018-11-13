import { Injectable } from '@angular/core';
import { RepositoryService } from "./../ShareData/repository.service";
import { JwtHelper  } from "angular-jwt";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private repository : RepositoryService, private router: Router) { }

  public loggout(){
    localStorage.removeItem('token');
    
    this.router.navigate(['/user/login']);
   // location.reload();
  }

  public isAdmin(){
 
    if(this.tokencheckRole()=="admin"){
      return true;
    }
     else{return false}
  }

  public isRC(){
    if(this.tokencheckRole()=="user"){
      return true;
    }
     else{return false}
  }

  public islogged(){
    var token = localStorage.getItem('token');
    if(token){
      return true;
    }
    else{
      return false;
    }
  }
public istokenExpired(){
  const helper = new JwtHelperService();
  var token = localStorage.getItem('token');
  const ex = helper.isTokenExpired(token);
  if(ex==true){localStorage.removeItem('token');}
  return ex;
}

 public tokencheckRole(){
   var token = localStorage.getItem('token');

   const helper = new JwtHelperService();

  const decodedToken = helper.decodeToken(token);
 
   
   return decodedToken.sub;

 }
 public tokencheckId(){
   var token = localStorage.getItem('token');

   const helper = new JwtHelperService();

const decodedToken = helper.decodeToken(token);
  
   return decodedToken.nameid;

 }
 public tokenGetName(){
  var token = localStorage.getItem('token');

  const helper = new JwtHelperService();

const decodedToken = helper.decodeToken(token);
 
 //console.log(decodedToken);
  return decodedToken.unique_name;

}
}
