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
 public activeButton: any;
 public deactiveButton: any;
 public imageUrl : string = this.repository.imageUrl;
  ngOnInit() {
    this.getpage();
  }
  
  public  getpage(){
    this.repository.getData('file/getallpages')
    .subscribe(res => {
      this.pages = res ;
    console.log(res)
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

    this.repository.getData('file/deactivepage/'+id)
    .subscribe(res => {
    //  this.activeButton = true;
    this.getpage();
  },
    (error) => {
    
    })
  }
  public ActivePage(id){

    this.repository.getData('file/activepage/'+id)
    .subscribe(res => {
    // this.activeButton = false;
    this.getpage();
  },
    (error) => {
    
    })
  }
}
