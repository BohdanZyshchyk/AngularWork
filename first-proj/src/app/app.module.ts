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
import { HomeappComponent } from './homeapp/homeapp.component';
import { Page404Component } from './page404/page404.component';
import { InfoAppComponent } from './about/info-app/info-app.component';
import { ContactAppComponent } from './about/contact-app/contact-app.component';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { ShowEventsComponent } from './show-router/show-events/show-events.component';
import { DetailComponent } from './events/detail/detail.component';
import { ShowRouterComponent } from './show-router/show-router.component';

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
    ExpanderComponent,
    HomeappComponent,
    Page404Component,
    InfoAppComponent,
    ContactAppComponent,
    AboutComponent,
    TestComponent,
    ShowEventsComponent,
    DetailComponent,
    ShowRouterComponent
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
