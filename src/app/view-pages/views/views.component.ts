import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors,AsyncValidatorFn } from '@angular/forms';
import { RepositoryService } from "./../../ShareData/repository.service";
import { ActivatedRoute } from '@angular/router';
import { Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

 
  constructor(private repository:RepositoryService,private fb: FormBuilder, private route: ActivatedRoute,private router: Router) { }
  public  imageUrl : string = this.repository.imageUrl;
  public Id:any;
  public page:any;
  public images:any;

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.Id=id;
      this.getimages(id);
      this.getpage(id);
    })
   
 
  }


  public  getpage(id){
    this.repository.getData('getpage/'+id)
    .subscribe(res => {
      this.page = res ;
      console.log(res);
  },
    (error) => {
    
    })
  }

  public  getimages(id){
    this.repository.getData('getimage/'+id)
    .subscribe(res => {
      this.images = res ;
      console.log(res);
  },
    (error) => {
    
    })
  }

}
