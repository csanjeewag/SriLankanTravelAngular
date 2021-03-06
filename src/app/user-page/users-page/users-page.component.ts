import { Component, OnInit } from '@angular/core';
import { RepositoryService } from "./../../ShareData/repository.service";
import { ActivatedRoute } from '@angular/router';
import { Router,ParamMap } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(private repository:RepositoryService, private route: ActivatedRoute,private router: Router) { }
  public users:any;
  public LoadingId:any;
  ngOnInit() {
    this.getusers();
  }
  public  getusers(){
    this.repository.getData('user/getuserdetails')
    .subscribe(res => {
      this.users = res ;
      this.LoadingId = null;
  },
    (error) => {
    
    })
  }
  public ToAdmin(email){
    this.LoadingId = email;
    this.repository.getData('user/toadmin/'+email)
    .subscribe(res => {
      this.getusers();
   
  },
    (error) => {
    
    })
  }

  public ToUser(email){
    this.LoadingId = email;
    this.repository.getData('user/touser/'+email)
    .subscribe(res => {
      this.getusers();
   
  },
    (error) => {
    
    })
  }


}

