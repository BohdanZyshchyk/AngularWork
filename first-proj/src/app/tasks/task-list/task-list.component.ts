import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task [] = [
    {task_text: "task 1"},
    {task_text: "task 2"},
    {task_text: "task 3"},
    {task_text: "task 4"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
