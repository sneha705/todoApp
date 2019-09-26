import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { todoDataformat } from './todoDataFormat';
import { DatePipe } from '@angular/common';
declare var swal: any;


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  EditObj = "";
  editObjId = "";
  constructor(private http: HttpClient, private datePipe: DatePipe, ) { }

  todoDataUrl = 'https://todo-app-apis.herokuapp.com/task';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getData(): Observable<todoDataformat[]> {
    return this.http.get<todoDataformat[]>(this.todoDataUrl)

  }

  addTodoData(data: todoDataformat) {
    let addData = JSON.stringify(data)
    return this.http.post(this.todoDataUrl, addData, this.httpOptions)  
  }


  deleteTodoData(id: string): Observable<{}> {
    const url = `${this.todoDataUrl}/${id}`;
    return this.http.delete(url, this.httpOptions)
  }

  todoEditObj(i,) {
    this.EditObj = i;
    this.editObjId = i._id;
   
  }

  editTodoData(data: todoDataformat) {
    const editUrl = `${this.todoDataUrl}/${this.editObjId}`;
    console.log(editUrl);
    return this.http.put<todoDataformat>(editUrl, data, this.httpOptions);
  }

  statusTodoData(item) {
    item.dueDate = (this.datePipe.transform(item.dueDate, 'yyyy-MM-dd'));
    let data = { "name": "Done", 'dueDate': item.dueDate,"description":item.description};
    const statusUrl = `${this.todoDataUrl}/${item._id}`;
    return this.http.put(statusUrl, data, this.httpOptions);

  }
}
