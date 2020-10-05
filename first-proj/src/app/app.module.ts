import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { HeaderComponent } from './menu/header/header.component';
import { FooterComponent } from './menu/footer/footer.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskItemComponent } from './tasks/task-list/task-item/task-item.component';
import { ExpanderComponent } from './events/expander/expander.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventListComponent,
    AddEventComponent,
    EventItemComponent,
    HeaderComponent,
    FooterComponent,
    TasksComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskItemComponent,
    ExpanderComponent
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
