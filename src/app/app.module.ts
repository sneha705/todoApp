import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodayTodoComponent } from './today-todo/today-todo.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {DatePipe} from '@angular/common'
import { FormsModule } from '@angular/forms';
import { CommonListComponent } from './common-list/common-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoComponent,
    TodayTodoComponent,
    ListComponent,
    EditComponent,
    CommonListComponent,
   
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //DatePipe,
  ],
  providers: [DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
