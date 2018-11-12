
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "./../../environments/environment";

interface userIdIsUnique {
  unique: boolean
}

@Injectable({
  providedIn: 'root'
})

export class RepositoryService {

  public urlAddress : string = environment.employee_url;
  public islogged:any;

  constructor( private http: HttpClient) { }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route, this.urlAddress),this.generateHeaders());
    
  }

  public getUserData(route: string) {
    return this.http.get(this.createUserCompleteRoute(route, this.urlAddress),this.generateHeaders());
    
  }
 
  public postData(route: string, body) {
    return this.http.post(this.createCompleteRoute(route, this.urlAddress),body, this.generateHeaders());
  
  
  }
  public postUserData(route: string, body) {
    return this.http.post(this.createUserCompleteRoute(route, this.urlAddress),body, this.generateHeaders());
  
  
  }
  public postFile(route: string, body) {
   
    return this.http.post(this.createCompleteRoutefile(route, this.urlAddress),body, this.generateHeadersfile());
  
  
  }
 public isUserIdUnique(userId): Observable<userIdIsUnique> {
   
    return this.http.post<userIdIsUnique>(this.createCompleteRoute('isuniqueemail', this.urlAddress), 'c@g.com',this.generateHeaders())

  }
  
  public deleteUser(route: string, body){
    return this.http.post(this.createCompleteRoute(route, this.urlAddress),body, this.generateHeaders());
  }



  private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/file/${route}`;
  }
  private createCompleteRoutefile(route: string, envAddress: string) {
    return `${envAddress}/file/${route}`;
  }
  private createUserCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/employee/${route}`;
  }
  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json',
                                'Authorization': 'bearer '+localStorage.getItem('token')
                              })
    }

  }
  private generateHeadersfile() {
    return {
      headers: new HttpHeaders({//'Content-Type': 'multipart/form-data',
                                
                                'Authorization': 'bearer '+localStorage.getItem('token'),
                                'enctype': 'multipart/form-data'
                              })
    }

  }
 

}

