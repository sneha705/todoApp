import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListComponent } from './list/list.component';
import {TodayTodoComponent} from './today-todo/today-todo.component';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [
  { path: 'addTodo', component: AddTodoComponent },
  { path: 'list', component:ListComponent },
  { path: 'todayTodo', component:TodayTodoComponent },
  { path: 'edit', component:EditComponent },
];

@NgModule({
  
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
