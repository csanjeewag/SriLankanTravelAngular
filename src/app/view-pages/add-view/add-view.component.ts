
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors,AsyncValidatorFn } from '@angular/forms';
import { RepositoryService } from "./../../ShareData/repository.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-view',
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.css']
})
export class AddViewComponent implements OnInit {

  constructor(private router: Router,private route : ActivatedRoute,private repository:RepositoryService,private fb: FormBuilder) { }

  public pageForm:FormGroup;
  public pageForms:FormGroup;
  public formGroup;
  public Message:any;
  public ImageUrl: Array<string> = [];
   public FileImage: Array<File> = [];
  ngOnInit() {

    
    this.pageForm = this.fb.group({
      id:[null,Validators.required],
      topic:[null,Validators.required],
      subtopic:[null],
      type:[null,Validators.required],
      dis1:[null],
      dis2:[null],
      dis3:[null],
      image :[null,Validators.required]
     
    });
    

    this.formGroup = this.fb.group({
      file: [null, Validators.required]
    });
  }

  public validateControl(controlName: string) {
    if (this.pageForm.controls[controlName].invalid && this.pageForm.controls[controlName].touched)
      return true;

    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.pageForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  

  public createpage(pageFormvalue){
    
    
    if (this.pageForm.valid) {
     
      let formData = new FormData();
      formData.append('Id',pageFormvalue.id,);
      formData.append('Topic',pageFormvalue.topic);
      formData.append('SubTopic',pageFormvalue.subtopic);
      formData.append('Type',pageFormvalue.type);
      formData.append('Dis1',pageFormvalue.dis1);
      formData.append('Dis2',pageFormvalue.dis2);
      formData.append('Dis3',pageFormvalue.dis3);
      formData.append('DefImage', this.FileImage[0]);
      formData.append('Image', this.FileImage[1]);
      formData.append('Image', this.FileImage[2]);
      console.log(formData.get('Id'))
     

      
      let apiUrl = 'test';
    
      this.repository.postFile(apiUrl, formData)
      
        .subscribe(res =>  {
          this.router.navigate(['view/side/travel']);
                    },
          (error => {
            this.Message = "Adding Page Failed!";
          })
        )
    
    }
  }

  onFileChange(file : FileList,id:number) {
    

    this.FileImage[id] = file.item(0);
   //selected image viewing
    var reader = new FileReader();
    reader.onload = (event:any) => {
       this.ImageUrl[id] = event.target.result;

       console.log(event.target.result)
    }
     reader.readAsDataURL(this.FileImage[id]);
  }

  public redirect(){
    this.router.navigate(['view/side/travel']);
  }
}


