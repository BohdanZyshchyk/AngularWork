import { Component, OnInit } from '@angular/core';
import { MyTask } from '../mytask.model';
import { STaskService } from '../s-task.service';

@Component({
  selector: 'app-mystat',
  templateUrl: './mystat.component.html',
  styleUrls: ['./mystat.component.css']
})
export class MystatComponent implements OnInit {

  constructor(private taskService: STaskService) { }
  taskList: MyTask[];
  ngOnInit(): void {
    this.taskList = this.taskService.getAllTasks();
    this.taskService.refreshTaskList.subscribe((tasks: MyTask []) =>{
      this.taskList = tasks;
    })
  }

}
