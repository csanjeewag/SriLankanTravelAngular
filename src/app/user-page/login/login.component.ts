import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors,AsyncValidatorFn } from '@angular/forms';
import { RepositoryService } from "./../../ShareData/repository.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router,private route : ActivatedRoute,private repository:RepositoryService,private fb: FormBuilder) { }
  public signupForm:FormGroup;
  public loginForm:FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),

     })

    this.signupForm = new FormGroup({
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmpassword: new FormControl('',[Validators.required]),
     })

   

  }

  public signup( value){
    console.log(value);
    if (this.signupForm.valid) {
     
      let formData = new FormData();
      formData.append('FName',value.fname,);
      formData.append('LName',value.lname);
      formData.append('Email',value.email,);
      formData.append('Password',value.password);

      let apiUrl = 'signup';
    
      this.repository.postFile(apiUrl, formData)
      
        .subscribe(res =>  {
          this.router.navigate(['view/side/travel']);
                    },
          (error => {
           // this.Message = "Adding Page Failed!";
          })
        )
    }

    
  }

  public login(value){
    console.log(value);
    if (this.loginForm.valid) {
     
      let formData = new FormData();
    
      formData.append('Email',value.email,);
      formData.append('Password',value.password);

      let apiUrl = 'login';
    
      this.repository.postFile(apiUrl, formData)
      
        .subscribe(res =>  {
          console.log(res);
          this.router.navigate(['view/side/travel']);
                    },
          (error => {
           // this.Message = "Adding Page Failed!";
          })
        )
    }
  }

}
