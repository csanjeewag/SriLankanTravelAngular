import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors,AsyncValidatorFn } from '@angular/forms';
import { RepositoryService } from "./../../ShareData/repository.service";
import { AuthServiceService } from "./../../AuthGuard/auth-service.service";
import { ActivatedRoute } from '@angular/router';
import { Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

 
  constructor(private auth:AuthServiceService ,private repository:RepositoryService,private fb: FormBuilder, private route: ActivatedRoute,private router: Router) { }
  public  imageUrl : string = this.repository.imageUrl;
  public Id:any;
  public page:any;
  public images:any;
  public win :any;
  public click :any=0;
  public Author:any;
  public Load:any;
  public comment: any;
  public eventid: any;
  public author: any;
  public ImageUrl:any;
  public commentForm: FormGroup;

  ngOnInit() {

    this.Load = true;
    this.Author = this.auth.tokencheckId();
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.Id=id;
      this.getimages(id);
      this.getpage(id);
      this.repository.setpageId(id);
      this.getcomment();
    })
   
 
  }


  public  getpage(id){
    this.repository.getData('file/getpage/'+id)
    .subscribe(res => {
      this.page = res ;
      
      
  },
    (error) => {
    
    })
  }

  public  getimages(id){
    this.repository.getData('file/getimage/'+id)
    .subscribe(res => {
      this.images = res ;
      
      this.Load = false;
  },
    (error) => {
    
    })
  }
  public Clickimage(id){
    if(this.click==id){
      this.click=null;
    }
    else{
      this.click = id;
    }

  }

  public ClickNext(){
  this.click = this.click +1;

  }

  public googlemap(){
    let location = this.page.location;
  this.win=  window.open(location, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=1000,width=600,height=600");
  }
  public closewindow(){
    this.win.close();
  }

  public update(id){
    this.router.navigate(['view/updateview/'+id]);
  }
  //////////////////////////////////////////////////////////

  public commenttform(){
    this.commentForm = new FormGroup({
      // EventId: new FormControl('', [Validators.required]),
      CommentIn: new FormControl('',[Validators.required]),


    })
  }


  public getcomment() {
    this.eventid = 1;
    let id = this.eventid;
    let url = "File/getcomment/"+id;
    this.repository.getData(url)
      .subscribe(res => {
        this.comment = res;
      console.log(res)
      }, (error) => {

      })

  }

  public deletecomment(id){
    let url = "File/deletecomment/"+id;        
   
  console.log(url);
   this.repository.getData(url)
        .subscribe( img => {
          this.getcomment();       
        }, (error => {     
        })
        )
   }

  OnSubmit(value) {
    console.log(value)
    let url = "File/addcomment";
    let formData = new FormData();
    formData.append('PageDetailId', this.Id);
    formData.append('UserEmail', this.author); 
    formData.append('CommentIn', value.CommentIn);
   

    this.repository.postFile(url,formData)
      .subscribe(res => {
        this.getcomment();
        this.commenttform();
        
      }, (error => {
       
      })
      )
  }
}
