import { Component, OnInit,Input} from '@angular/core';
import { TodoDataService } from '../todo-data.service';

declare var swal: any;


@Component({
  selector: 'app-common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.css']
})

export class CommonListComponent implements OnInit {

  @Input() obj:[];
  search =null;
  todoData=null;
  constructor(private service: TodoDataService) { }
  
  showTodoData() {
    this.service.getData()
      .subscribe((data) => {
        this.todoData = data;
      });
  }
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
          this.service.deleteTodoData(id).
            subscribe();
          swal("Poof! Sucessfully deleted Your Todo Task", {
            icon: "success",
          });
        }
      });
  }

  sorting(keyName) {
    this.obj.sort(function (a, b) {
      if (a[keyName] <b[keyName]) return -1;
      if (a[keyName] >b[keyName]) return 1;
      return 0;
    });
  }



  
searchData(value,keyName){
this.obj= this.todoData.filter(function(event) {
  return (event[keyName]).indexOf(value) > -1
})
 
}

  ngOnInit() {
    this.showTodoData();
   
  }
}