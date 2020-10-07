import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactAppComponent } from './about/contact-app/contact-app.component';
import { InfoAppComponent } from './about/info-app/info-app.component';
import { DetailComponent } from './events/detail/detail.component';
import { EventsComponent } from './events/events.component';
import { ShowEventsComponent } from './show-router/show-events/show-events.component';
import { HomeappComponent } from './homeapp/homeapp.component';
import { Page404Component } from './page404/page404.component';
import { TestComponent } from './test/test.component';
import { ShowRouterComponent } from './show-router/show-router.component';

const routes: Routes = [
  {path:"", redirectTo: "/home",pathMatch: "full"},
  {path:"home", pathMatch: "full", component: HomeappComponent},
  {path:"events", pathMatch: "full", component: EventsComponent},
  {path:"showevents", component: ShowRouterComponent,
  children: [
    {path:":id", component:DetailComponent},
    {path:"", component:ShowEventsComponent},
  ]},
  {
    path:"about", 
    component: AboutComponent,
    children: [
      {path:"contact", component:ContactAppComponent},
      {path:"info", component:InfoAppComponent},
      {path:":id", component:TestComponent},
    ]},

  {path:"**",  component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
