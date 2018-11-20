
  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, Validators, EmailValidator } from '@angular/forms';
  
  import {  RepositoryService} from './../../../ShareData/repository.service';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-add-type',
    templateUrl: './add-type.component.html',
    styleUrls: ['./add-type.component.css']
  })
  export class AddTypeComponent implements OnInit {
  
    constructor(private router: Router,  private repository : RepositoryService) { }
    // public  input:FormData = new FormData();
    public typeForm: FormGroup;
    public Message:any;
    
    ngOnInit() {
      this.typeForm = new FormGroup({
        typeId: new FormControl('',[Validators.required]),
        typeName: new FormControl('',[Validators.required]),
        typeDis: new FormControl('',[Validators.required]),
       
  
       })
    }
  
    public validateControl(controlName: string) {
      if (this.typeForm.controls[controlName].invalid && this.typeForm.controls[controlName].touched)
        return true;
  
      return false;
    }
  
    public hasError(controlName: string, errorName: string) {
      if (this.typeForm.controls[controlName].hasError(errorName))
        return true;
  
      return false;
    }
  
    public createType(value) {

      let formData = new FormData();
      formData.append('TypeId', value.typeId);
      formData.append('TypeName',value.typeName);
      formData.append('Discription',value.typeDis);

    
     let apiUrl = 'subpart/addtype';
        
        this.repository.postFile(apiUrl, formData)
          .subscribe(res =>  {
            this.Message="Type Created!";
               // this.router.navigate(['/profile/admin/roles']);
             
         
            },
            (error => {
              this.Message="Type Created Failed,Try Again!";
            })
          )
      
      }

      public redirectToOwnerList(){
        // this.router.navigate(['/profile/list']);
        this.typeForm = new FormGroup({
          typeId: new FormControl('',),
          typeName: new FormControl('',),
          typeDis: new FormControl('',)
          
         })
      }

    }
  
 
  
  
  