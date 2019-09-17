import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  obj=null;
  todoData= null;
  constructor(private service: TodoDataService) {}
 
  showTodoData() {
    this.service.getData()
      .subscribe((data) => {
      // this.todoData = data;
       //this.obj =this.todoData ;
       this.obj=data;
      });
  }



  ngOnInit() {
    this.showTodoData();
  }
}

