
  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors,AsyncValidatorFn } from '@angular/forms';
  import {  RepositoryService} from './../../ShareData/repository.service';
  import { Router,ParamMap } from '@angular/router';
  import { ActivatedRoute } from '@angular/router';

  @Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.css']
  })
  export class RegisterUserComponent implements OnInit {
  
   constructor(private route: ActivatedRoute,private router: Router,  private repository : RepositoryService) { }
    
    public registerForm: FormGroup;
    public registerEmail:any;
    public message:any;
    public empEmail:any;
    public Name:any;
    public Code:any;
    public RegisterSucces:any;

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.empEmail = params['email'];
        this.Name = params['name'];
        this.Code = params['code'];
       this.registerEmail=this.empEmail;
    });

      this.registerForm = new FormGroup({
        resitercode:new FormControl(this.Code,[Validators.required,Validators.maxLength(6)])
      })
    }
    public validateControl(controlName: string) {
      if (this.registerForm.controls[controlName].invalid && this.registerForm.controls[controlName].touched)
        return true;
  
      return false;
    }
  
    public hasError(controlName: string, errorName: string) {
      if (this.registerForm.controls[controlName].hasError(errorName))
        return true;
  
      return false;
    }
  
    public Register(value) {
     
      let formData = new FormData();
      formData.append('Code',value.resitercode,);
      formData.append('Email',this.registerEmail);
      if (this.registerForm.valid) {
        
     
      let apiUrl = 'user/register';
 
         this.repository.postFile(apiUrl, formData)
          .subscribe(res => {
           
            this.message="Registration Success!";
            this.RegisterSucces=true;
              },
            (error => {
              this.message="Registration Failed, Try Again!";
              this.RegisterSucces = false;
            })
          )
       
      }
  
  
    }
  }
  