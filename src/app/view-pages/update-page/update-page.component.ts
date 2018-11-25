import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors,AsyncValidatorFn } from '@angular/forms';
import { RepositoryService } from "./../../ShareData/repository.service";
import { ActivatedRoute } from '@angular/router';
import { Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
public types:any;
  constructor(private repository:RepositoryService,private fb: FormBuilder, private route: ActivatedRoute,private router: Router) { }
 
  public District = ["Gampaha","Colombo","Kaluthara","Matara","Galle","Hambantota","Anuradhapura","Polonnaruwa","Matale","Kandy","NuwaraEliya","Kegalle","Ratnapura","Badulla","Monaragala","Hambantota","Trincomalee","Batticaloa","Ampara","Jaffna","Kilinochchi","Mannar","Mullaitivu","Vavuniya"];
  
  public pageForm:FormGroup;
  public pageForms:FormGroup;
  public formGroup;
  public Message:any
  public ImageUrl: Array<string> = [];
   public FileImage: Array<File> = [];
   public Images:any;
   public Page :any;
   public Id = 1;
  ngOnInit() {

    this.GetTypes();
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.getimages(id);
      this.getpage(id);
    })

    this.pageForm = this.fb.group({
      id:[null,Validators.required],
      topic:[null,Validators.required],
      subtopic:[null],
      type:[null,Validators.required],
      dis1:[null,Validators.required],
      dis2:[null],
      dis3:[null],
      district:[null,Validators.required],
      town:[null,Validators.required],
      image :[null],
      location:[null]
     
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
      formData.append('District', pageFormvalue.district);
      formData.append('Town',pageFormvalue.town);
      formData.append('Dis1',pageFormvalue.dis1);
      formData.append('Dis2',pageFormvalue.dis2);
      formData.append('Dis3',pageFormvalue.dis3);
      formData.append('Location',pageFormvalue.location);
      
      if(this.FileImage[0]== null){
        formData.append('DefImage', this.Page.defImage);
      }
      else{
        formData.append('DefImage', this.FileImage[0]);
       
      }
     
      formData.append('Image', this.FileImage[1]);
      formData.append('Image', this.FileImage[2]);
      formData.append('Image', this.FileImage[3]);
      formData.append('Image', this.FileImage[4]);
     

      
      let apiUrl = 'file/uploadpage';
    
      this.repository.postFile(apiUrl, formData)
      
        .subscribe(res =>  {
          this.router.navigate(['view/side/travel']);
                    },
          (error => {
            this.Message = "Upload Page Failed!";
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

       
    }
     reader.readAsDataURL(this.FileImage[id]);
  }


  public  getpage(id){
    this.repository.getData('file/getpage/'+id)
    .subscribe(res => {
      this.Page = res ;
     
      
      this.updatepages();
  },
    (error) => {
    
    })
  }

  public  getimages(id){
    this.repository.getData('file/getimage/'+id)
    .subscribe(res => {
      this.Images = res ;
      
  },
    (error) => {
    
    })
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
  public updatepages(){
    this.pageForm.controls['id'].setValue(this.Page.id);
    this.pageForm.controls['topic'].setValue(this.Page.topic);
    this.pageForm.controls['subtopic'].setValue(this.Page.subtopic);
    this.pageForm.controls['type'].setValue(this.Page.type);
    this.pageForm.controls['dis1'].setValue(this.Page.dis1);
    this.pageForm.controls['dis2'].setValue(this.Page.dis2);
    this.pageForm.controls['dis3'].setValue(this.Page.dis3);
    this.pageForm.controls['subtopic'].setValue(this.Page.subTopic);
    this.pageForm.controls['district'].setValue(this.Page.district);
    this.pageForm.controls['town'].setValue(this.Page.town);
    this.pageForm.controls['location'].setValue(this.Page.location);
    
    this.pageForm.controls['image'].setValue(this.Page.defImage);
  }
  public redirect(){
    this.router.navigate(['view/side/travel']);
  }
}
