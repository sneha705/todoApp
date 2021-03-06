import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-today-todo',
  templateUrl: './today-todo.component.html',
  styleUrls: ['./today-todo.component.css']
})
export class TodayTodoComponent implements OnInit {
  obj=null;
  todoData= null;
  todoData1=null;

  constructor(private service: TodoDataService,
    private datePipe: DatePipe,) {}
 
  showTodoData() {
    this.service.getData()
      .subscribe((data) => {
        this.todoData = data;
        this.searchData(this.todoData);
       
      });

  }

  searchData(todoData){
   let value=(this.datePipe.transform(new Date, 'yyyy-MM-dd'));
       this.obj=todoData.filter(function(event){
        return event.dueDate.indexOf(value) >- 1 
      })
      this.todoData1=this.obj;
  }



    // value=(this.datePipe.transform(new Date, 'yyyy-MM-dd'));
    // obj= this.todoData
    //      .filter(function(event){
    //      return event.dueDate.indexOf(this.value) >- 1 
    //    })
   



  ngOnInit() {
    this.showTodoData();
    
  
   
  }

  deletetodo(event){
   this.obj = this.obj.filter(function( todo ) {
                return todo._id !==event
               });
   }
}
