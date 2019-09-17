import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {TodoDataService} from '../todo-data.service';
import { DatePipe } from '@angular/common';


 
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
 
})
export class AddTodoComponent implements OnInit {
  editObj;
  dateInput=true;
  hideBtn=true;
  editDate="";
  
  constructor(private fb: FormBuilder,
    private todoService:TodoDataService,
    private datePipe: DatePipe,) {}  

  todoForm=this.fb.group({
    name :[],
    description:[],
    dueDate:[],
    priority:[],
    });



   onSubmit(){
    //console.warn(this.todoForm.value);
    this.todoService. addTodoData(this.todoForm.value)
   //console.log(this.todoForm.value)
   }
  onUpdate(){
    this.todoService.editTodoData(this.todoForm.value)
  }

   resetDate(){
     this.dateInput=false; 
   }
  
   btnHide(){
    this.hideBtn=false
   }

   //firdt letter capital
   
  ngOnInit() {
  this.editObj=this.todoService.EditObj;
     //console.log(this.editObj.priority)
  this.editDate=(this.datePipe.transform(this.editObj.dueDate, 'yyyy-MM-dd'));
  this.todoForm.get('name').setValue(this.editObj.name)
  this.todoForm.get('description').setValue(this.editObj.description)
  this.todoForm.get('dueDate').setValue(this.editDate)   
  

  }

}
