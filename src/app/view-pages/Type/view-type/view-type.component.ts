import { Component, OnInit } from '@angular/core';
import { RepositoryService } from "./../../../ShareData/repository.service";
import { ActivatedRoute } from '@angular/router';
import { Router,ParamMap } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-view-type',
  templateUrl: './view-type.component.html',
  styleUrls: ['./view-type.component.css']
})
export class ViewTypeComponent implements OnInit {


  constructor(private repository:RepositoryService, private route: ActivatedRoute,private router: Router) { }
 public types:any;
 public LoadingId:any;
  ngOnInit() {
this.gettypes();
  }

  public  gettypes(){
    this.repository.getData('subpart/gettype')
 
    .subscribe(res => {
      this.LoadingId = null;
      this.types = res ;
  },
    (error) => {
   
    })
  }

  public ActiveType(id){
    this.LoadingId = id;
    this.repository.getData('subpart/activetype/'+id)
    .subscribe(res => {
    this.gettypes();
    
  },
    (error) => {
      
    })
  }

  public DeActiveType(id){
    this.LoadingId = id;
    this.repository.getData('subpart/deactivetype/'+id)
    .subscribe(res => {
    this.gettypes();
    
  },
    (error) => {
      
    })
  }

}
