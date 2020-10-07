import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './menu/header/header.component';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { FormsModule } from '@angular/forms';
import { MystatComponent } from './tasks/mystat/mystat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTasksComponent,
    AddTaskComponent,
    TaskItemComponent,
    MystatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
