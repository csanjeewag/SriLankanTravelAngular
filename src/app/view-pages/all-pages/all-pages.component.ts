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
imageUrl : string = "http://localhost:5308/";
  ngOnInit() {
    this.getpages();
  }

  public  getpages(){
    this.repository.getData('gettopicid')
    .subscribe(res => {
      this.pages = res ;
      console.log(res);
  },
    (error) => {
    
    })
  }

  public gotopage(id){

    this.router.navigate(['view/side/travel/'+id]);
  }
  

  
}
