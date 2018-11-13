import { Component, OnInit } from '@angular/core';
import { RepositoryService } from "./../../ShareData/repository.service";
import { ActivatedRoute } from '@angular/router';
import { Router,ParamMap } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-pages-state',
  templateUrl: './pages-state.component.html',
  styleUrls: ['./pages-state.component.css']
})
export class PagesStateComponent implements OnInit {

  constructor(private repository:RepositoryService, private route: ActivatedRoute,private router: Router) { }
 public pages:any;
 public imageUrl : string = "http://localhost:5308/";
  ngOnInit() {
    this.getpage();
  }
  
  public  getpage(){
    this.repository.getData('getallpages')
    .subscribe(res => {
      this.pages = res ;
    
  },
    (error) => {
    
    })
  }

  public gotopage(id){

    this.router.navigate(['view/side/travel/'+id]);
  }
  
  public updatepage(id){

    this.router.navigate(['view/updateview/'+id]);
  }
  public AllImage(id){

    this.router.navigate(['view/allimage/'+id]);
  }
  public DeActivePage(id){

    this.repository.getData('deactivepage/'+id)
    .subscribe(res => {
      //this.router.navigate(['view/side/travel/']);
      location.reload();
  },
    (error) => {
    
    })
  }
  public ActivePage(id){

    this.repository.getData('activepage/'+id)
    .subscribe(res => {
     // this.router.navigate(['view/side/travel/'+id]);
     location.reload();
  },
    (error) => {
    
    })
  }
}
