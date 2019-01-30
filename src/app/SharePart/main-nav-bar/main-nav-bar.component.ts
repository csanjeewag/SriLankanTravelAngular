import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthServiceService } from "./../../AuthGuard/auth-service.service";
@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {

  constructor(private auth:AuthServiceService, private router: Router,private route : ActivatedRoute,) { }
  public islogged:any;
public isAdmin:any;
public isUser:any;
public UserName:any;
  ngOnInit() {
    this.islogged = this.auth.islogged();
    this.isAdmin= this.auth.isAdmin();
    this.isUser= this.auth.isUser();
    this.UserName= this.auth.tokenGetName();
  }

  public  logout(){
    this.auth.loggout();
    }
  public addview(){
   
    if(this.islogged){
      this.router.navigate(['view/addview']);
 
    }else{
      alert("Please register, before add new place!");
    }

  }
}
