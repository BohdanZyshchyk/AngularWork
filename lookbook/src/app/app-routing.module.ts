import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component';
import { MystatComponent } from './tasks/mystat/mystat.component';

const routes: Routes = [
  {path:"", redirectTo: "/logbook",pathMatch: "full"},
  {path:"logbook", pathMatch: "full", component: ListTasksComponent},
  {path:"mystat", pathMatch: "full", component: MystatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
