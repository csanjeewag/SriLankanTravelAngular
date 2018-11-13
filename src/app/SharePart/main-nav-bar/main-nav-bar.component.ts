import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "./../../AuthGuard/auth-service.service";
@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {

  constructor(private auth:AuthServiceService) { }
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
  
}
