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

  constructor(private service: TodoDataService,
    private datePipe: DatePipe,) {}
 
  showTodoData() {
    this.service.getData()
      .subscribe((data) => {
       this.todoData = data;
      this.obj=this.todoData;
      });
  }

  searchData(){
   let value=(this.datePipe.transform(new Date, 'yyyy-MM-dd'));
   this.obj= this.todoData
        .filter(function(event){
        return event.dueDate.indexOf(value) >- 1 
      })
  }



    // value=(this.datePipe.transform(new Date, 'yyyy-MM-dd'));
    // obj= this.todoData
    //      .filter(function(event){
    //      return event.dueDate.indexOf(this.value) >- 1 
    //    })
   



  ngOnInit() {
    this.showTodoData();
    //this.searchData()
  //console.log(this.obj)
  
   
  }
}
