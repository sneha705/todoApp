import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  id = null;
  obj = null;
  data1 = null;
  todoData = null;
  constructor(private service: TodoDataService) { }

  showTodoData() {
    this.service.getData()
      .subscribe((data) => {
        this.obj = data;
      });
  }

  ngOnInit() {
    this.showTodoData();
  }
  deletetodo(event) {
    this.obj = this.obj.filter(function (todo) {
      return todo._id !== event
    });
  }

}

