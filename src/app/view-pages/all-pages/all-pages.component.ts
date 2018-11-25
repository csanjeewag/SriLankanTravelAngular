// import { Component, OnInit } from '@angular/core';
// import { FormBuilder,FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors,AsyncValidatorFn } from '@angular/forms';
// import { RepositoryService } from "./../../ShareData/repository.service";
// import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
// @Component({
//   selector: 'app-all-pages',
//   templateUrl: './all-pages.component.html',
//   styleUrls: ['./all-pages.component.css']
// })
// export class AllPagesComponent implements OnInit {

//   constructor(private route : ActivatedRoute,private router: Router,private repository:RepositoryService,private fb: FormBuilder) { }
// public pages;
// public  imageUrl : string = this.repository.imageUrl;
//   ngOnInit() {
//     this.getpages();
//   }

//   public  getpages(){
//     this.repository.getData('file/gettopicid')
//     .subscribe(res => {
//       this.pages = res ;
     
//   },
//     (error) => {
    
//     })
//   }

//   public gotopage(id){

//     this.router.navigate(['view/side/travel/'+id]);
//   }
  

  
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors,AsyncValidatorFn } from '@angular/forms';
import { RepositoryService } from "./../../ShareData/repository.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-all-pages',
  templateUrl: './all-pages.component.html',
  styleUrls: ['./all-pages.component.css']
})
export class AllPagesComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router: Router,private repository:RepositoryService,private fb: FormBuilder) { }
public pages;
public types;
public  imageUrl : string = this.repository.imageUrl;
  ngOnInit() {
    this.GetPages("");
    this.Gettypes();
  }

  public  getpages(){
    
    this.repository.getData('file/gettopicid')
    .subscribe(res => {
      this.pages = res ;
     
  },
    (error) => {
    
    })
  }

  public gotopage(id){

    this.router.navigate(['view/side/travel/'+id]);
  }
  
  public Gettypes(){

    this.repository.getData('subpart/gettypes')
    .subscribe(res => {
      this.types = res ;
     
  },
    (error) => {
    
    })    

  }
public GetPages(type){
  this.repository.getData('file/gettopicid/'+type)
  .subscribe(res => {
    this.pages = res ;
   
},
  (error) => {
  
  })    
}
  
}
