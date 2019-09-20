import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoDataService } from '../todo-data.service';


declare var swal: any;


@Component({
  selector: 'app-common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.css']
})

export class CommonListComponent implements OnInit {

  @Input() obj;
  //@Input() objFunc:Function;

  @Output() deleteTodo = new EventEmitter();
 // @Output() statusTodo = new EventEmitter();
  search = null;
  todoData = null;
  constructor(private service: TodoDataService) { }


  deleteTodoData(id: string) {

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Todo Data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.deleteTodo.emit(id)
          this.service.deleteTodoData(id).
            subscribe(

              (val) => {
                // swal("Poof! Sucessfully deleted Your Todo Task", {
                //   icon: "success",
                // });
              },
              response => {
                alert("Internal Data Entry Error");
              });


        }

      });
  }

  statusTodoData(item) {
  
    swal({
      title: "Are you sure?",
      text: "Your Task is completed!!",
      buttons: true,
      dangerMode: true,
    })
      .then((willDone) => {
        if (willDone) {
          this.service.statusTodoData(item)
            .subscribe(val => {
             
              item.name = "Done";

              swal("Successfully!", "One Todo task Done", "success");
            }, error => {
              alert("Internal Data Entry Error");
            });
      
        }
      });
  }










  sorting(keyName) {
    this.obj.sort(function (a, b) {
      if (a[keyName] < b[keyName]) return -1;
      if (a[keyName] > b[keyName]) return 1;
      return 0;
    });
  }



  searchData(value, keyName) {
    this.todoData = this.obj;
    this.obj = this.todoData.filter(function (event) {
      return (event[keyName]).indexOf(value) > -1
    })

  }

  ngOnInit() {


  }
}