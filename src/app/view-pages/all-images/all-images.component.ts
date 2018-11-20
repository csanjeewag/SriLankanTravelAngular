import { Component, OnInit } from '@angular/core';
import { RepositoryService } from "./../../ShareData/repository.service";
import { ActivatedRoute } from '@angular/router';
import { Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})
export class AllImagesComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router: Router,private repository:RepositoryService) { }
  public pages;
  public  imageUrl : string = this.repository.imageUrl;
public Images:any;
public Id :any;
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.Id = id;
      this.getimages(id);
    })
  }

  public  getimages(id){
    this.repository.getData('file/allgetimage/'+id)
    .subscribe(res => {
      this.Images = res ;
     
  },
    (error) => {
    
    })
  }

  public DeActivePage(id){
    let apiUrl = 'file/deactiveimage';
    
    let formData = new FormData();
      formData.append('Id',id);

    this.repository.postFile(apiUrl, formData)
    
      .subscribe(res =>  {
       this.getimages(this.Id);
                  },
        (error => {
          // this.Message="role Created Failed,Try Again!";
        })
      )
  
  }
  public ActivePage(id){
    let apiUrl = 'file/activeimage';
    
    let formData = new FormData();
      formData.append('Id',id);

    this.repository.postFile(apiUrl, formData)
    
      .subscribe(res =>  {
        this.getimages(this.Id);
                  },
        (error => {
          // this.Message="role Created Failed,Try Again!";
        })
      )
  
  }
}
