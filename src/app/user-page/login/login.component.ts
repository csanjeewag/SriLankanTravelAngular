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
public msg:any;
  
  constructor(private router: Router,private route : ActivatedRoute,private repository:RepositoryService,private fb: FormBuilder) { }
  public signupForm:FormGroup;
  public loginForm:FormGroup;
  public waiting :any;
public result:any;
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),

     })

    this.signupForm = new FormGroup({
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
      confirmpassword: new FormControl('',[Validators.required]),
     })

   

  }

  public signup( value){
    this.waiting = "Please Wait, Cheking your email .. .";
   
    if (this.signupForm.valid) {
     
      let formData = new FormData();
      formData.append('FName',value.fname,);
      formData.append('LName',value.lname);
      formData.append('Email',value.email,);
      formData.append('Password',value.password);

      let apiUrl = 'user/signup';
    
      this.repository.postFile(apiUrl, formData)
      
        .subscribe(res =>  {
          this.result = res
          localStorage.setItem('token',this.result.token );
           this.msg = "Please check your email, and register!";
           this.waiting = "";
          this.router.navigate(['view/side/travel']);
                    },
          (error => {
            this.waiting = "";
           // this.Message = "Adding Page Failed!";
           this.msg = "signup failed!";
          })
        )
    }

    
  }

  public login(value){
   
    if (this.loginForm.valid) {
     
      let formData = new FormData();
    
      formData.append('Email',value.email,);
      formData.append('Password',value.password);

      let apiUrl = 'user/login';
    
      this.repository.postFile(apiUrl, formData)
      
        .subscribe(res =>  {
          this.result = res
         localStorage.setItem('token',this.result.token );
         this.msg = "login successfull!";
          this.router.navigate(['view/side/travel']);

                    },
          (error => {
           // this.Message = "Adding Page Failed!";
           this.msg = "login failed!";
          })
        )
    }
  }

  public ForgetPassword(value){
this.waiting = "waiting.. ."
   let  email = value.email;
   console.log(email)
    let apiUrl = 'user/forgetpassword/'+email;
    
      this.repository.getData(apiUrl)
      
        .subscribe(res =>  {
           this.msg = "Please check your email, and change password!";
           this.waiting = "";
                    },
          (error => {
            this.waiting = "";
           // this.Message = "Adding Page Failed!";
           this.msg = "forgotten password failed!";
          })
        )

  }
}
