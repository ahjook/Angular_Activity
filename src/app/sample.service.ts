import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { dataModel } from './httpModel';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  apiUrl ="https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  fetchData(){
    return this.http.get<dataModel[]>(this.apiUrl);
    
  }

  // delete function
  delData(id: any): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`,httpOptions)
  }

  // add function
  addUser(newUser: dataModel[]) : Observable<dataModel[]>{
    return this.http.post<dataModel[]>(this.apiUrl , newUser)
  }

  // get the id function
  getId(id): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  //updata function 
  updateData(listUpdate:dataModel,id: any): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`,listUpdate)
  }

  updateInfo(params: dataModel, listid){
    return this.http.put<dataModel>(this.apiUrl+"/"+listid,params)
    }
  

}
