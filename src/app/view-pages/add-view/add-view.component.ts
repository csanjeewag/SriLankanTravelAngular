
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors,AsyncValidatorFn } from '@angular/forms';
import { RepositoryService } from "./../../ShareData/repository.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthServiceService } from "./../../AuthGuard/auth-service.service";

@Component({
  selector: 'app-add-view',
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.css']
})
export class AddViewComponent implements OnInit {

  constructor(private auth:AuthServiceService, private router: Router,private route : ActivatedRoute,private repository:RepositoryService,private fb: FormBuilder) { }

  public District = ["Gampaha","Colombo","Kaluthara","Matara","Galle","Hambantota","Anuradhapura","Polonnaruwa","Matale","Kandy","NuwaraEliya","Kegalle","Ratnapura","Badulla","Monaragala","Hambantota","Trincomalee","Batticaloa","Ampara","Jaffna","Kilinochchi","Mannar","Mullaitivu","Vavuniya"];
  public pageForm:FormGroup;
  public pageForms:FormGroup;
  public formGroup;
  public Message:any;
  public ImageUrl: Array<string> = [];
   public FileImage: Array<File> = [];
   public Author:any;
   public types:any;
  ngOnInit() {
    this.GetTypes();

    this.Author = this.auth.tokencheckId();
    
    this.pageForm = this.fb.group({
      id:[null],
      topic:[null,Validators.required],
      subtopic:[null],
      type:[null,Validators.required],
      dis1:[null],
      dis2:[null],
      dis3:[null],
      district:[null,Validators.required],
      town:[null,Validators.required],
      image :[null,Validators.required],
      location:[null]
     
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
      formData.append('Id',"");
      formData.append('Topic',pageFormvalue.topic);
      formData.append('SubTopic',pageFormvalue.subtopic);
      formData.append('Author', this.Author);
      formData.append('Type',pageFormvalue.type);
      formData.append('District', pageFormvalue.district);
      formData.append('Town',pageFormvalue.town);
      formData.append('Dis1',pageFormvalue.dis1);
      formData.append('Dis2',pageFormvalue.dis2);
      formData.append('Dis3',pageFormvalue.dis3);
      formData.append('DefImage', this.FileImage[0]);
      formData.append('Image', this.FileImage[1]);
      formData.append('Image', this.FileImage[2]);
      formData.append('Location',pageFormvalue.location);
     

      
      let apiUrl = 'file/test';
    
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

  public GetTypes(){
    this.repository.getData('subpart/gettypes')
    .subscribe(res => {
      this.types = res ;
      console.log(res)
     
  },
    (error) => {
    
    })
  }
}


