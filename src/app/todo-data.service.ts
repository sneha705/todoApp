import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {todoDataformat} from './todoDataFormat';
declare var swal: any;

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  EditObj='';
  editObjId='';
  constructor(private http:HttpClient) { }

  todoDataUrl='https://todo-app-apis.herokuapp.com/task';
  // postDataUrl='https://todo-app-apis.herokuapp.com/task';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getData (): Observable<todoDataformat[]> {
    return this.http.get<todoDataformat[]>(this.todoDataUrl)
    
  }

  addTodoData(data:todoDataformat){
    let addData=JSON.stringify(data )
    //console.log(addData)
   return this.http.post(this. todoDataUrl,addData, this.httpOptions )
    .subscribe(
      (val) => {
        swal("Successfully!", "One Todo task ADDED", "success");
      },
      response => {
        alert("Internal Data Entry Error");
      });
  }


deleteTodoData (id: string): Observable<{}> {
  const url = `${this.todoDataUrl}/${id}`; 
 
  return this.http.delete(url, this.httpOptions)
 
  }
  todoEditObj(i,id){
  
  this.EditObj=i;
  this.editObjId=id
  //console.log(this.editObjId);
  }

  editTodoData(data:todoDataformat){
    let editData=JSON.stringify(data)

     const editUrl=`${this.todoDataUrl}/${this.editObjId}`
    // console.log(this.editObjId)
     //console.log(editUrl);
     //console.log(editData);
     return this.http.put<todoDataformat>(editUrl, data, this.httpOptions)
     .subscribe(
      (val) => {
        swal("Successfully!", "One Todo task UPDATED", "success");
      },
      response => {
        alert("Internal Data Entry Error");
      });
    
     
   }
  

}
