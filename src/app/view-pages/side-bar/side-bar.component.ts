import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors,AsyncValidatorFn } from '@angular/forms';
import { RepositoryService } from "./../../ShareData/repository.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router: Router,private repository:RepositoryService,private fb: FormBuilder) { }
public pages:any;
public Id:any;


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.Id = params.get("id")
    })
    this.getpages();
    
  }


  public  getpages(){
    this.repository.getData('getpagestopic')
    .subscribe(res => {
      this.pages = res ;
  
  },
    (error) => {
    
    })
  }

  public gotopage(id){

    this.router.navigate(['view/side/travel/'+id]);
  }
  
}
