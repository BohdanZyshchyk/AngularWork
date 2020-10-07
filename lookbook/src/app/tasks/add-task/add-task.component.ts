import { Component, OnInit, ViewChild  } from '@angular/core';
import { MyTask } from '../mytask.model';
import { STaskService } from '../s-task.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  id: string;
  theme: string;
  text_work: string;
  iamge_url: string;
  date: string;
  constructor(private taskService: STaskService) { }

  ngOnInit(): void {
  }
  sendNewTask(){
    const myId = uuid.v4();
    const mytask = new MyTask(myId, this.theme,this.text_work,this.iamge_url,this.date);
    this.taskService.addTask(mytask);
  }
}
