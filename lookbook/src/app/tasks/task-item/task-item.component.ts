import { Component, Input, OnInit } from '@angular/core';
import { MyTask } from '../mytask.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor() { }
  @Input() currentTask: MyTask;
  @Input() index: number;
  ngOnInit(): void {
  }

}
