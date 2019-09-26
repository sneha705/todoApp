import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoDataService } from '../todo-data.service';


declare var swal: any;


@Component({
  selector: 'app-common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.css']
})

export class CommonListComponent implements OnInit {
x;
  //passing todo data and store in obj
  @Input() obj;
  //passing deleted id to other component
  @Output() deleteTodo = new EventEmitter();

  search = null;
  @Input() todoData =null;

 
  constructor(public service: TodoDataService) { }
//delete function call by service
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
                swal("Poof! Sucessfully deleted Your Todo Task", {
                  icon: "success",
                });
              },
              response => {
                alert("Internal Data Entry Error");
              });
        }

      });
  }
//status todo data function call by service
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

//search input value in list
  searchData(value, keyName) {
  
    this.obj = this.todoData.filter(function (event) {
      return (event[keyName]).indexOf(value) > -1
    
    })

  } 
//sorting the list
  sorting1(keyName) {

    this.obj.sort(function (a, b) {
      if (a[keyName] < b[keyName]) return -1;
      if (a[keyName] > b[keyName]) return 1;
      return 0;
    });
  }
  sorting(keyName) {
    if(keyName=="priority"){
      this.obj.sort(function (a, b) {
        if (a[keyName] < b[keyName]) return -1;
        if (a[keyName] > b[keyName]) return 1;
        return 0;
      });
    }
else{
    this.obj.sort(function (a, b) {
      return  a[keyName].toLowerCase().localeCompare(b[keyName].toLowerCase());

    
    });
  }
  }

  descSorting(keyName) {
    if(keyName=="priority"){
      this.obj.sort(function (a, b) {
        if (a[keyName] >b[keyName]) return -1;
        if (a[keyName] <b[keyName]) return 1;
        return 0;
      });
    }
else{
    this.obj.sort(function (a, b) {
      return  b[keyName].toLowerCase().localeCompare(a[keyName].toLowerCase());

    
    });
  }
  }

  ngOnInit() {


  }
}