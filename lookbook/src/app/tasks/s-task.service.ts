import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as uuid from 'uuid';
import { MyTask } from './mytask.model';
@Injectable({
  providedIn: 'root'
})
export class STaskService {
  
  refreshTaskList = new EventEmitter<MyTask[]>();

  constructor() { }
  tasksList: MyTask [] = [
    new MyTask (uuid.v4(),  "J task" , "make some task", "https://s3.tproger.ru/uploads/2017/04/nodejs-web-scraping-880x308.png", "2020"),
    new MyTask (uuid.v4(),  "C task" , "make some task", "https://programmerspoint.in/images/c-programming-course.png", "2020"),
    new MyTask (uuid.v4(),  "C task" , "make some task", "https://programmerspoint.in/images/c-programming-course.png", "2020" ),
    new MyTask (uuid.v4(),  "P task" , "make some task", "https://d2xzmw6cctk25h.cloudfront.net/post/2236/og_image/39ed77ccb6aab5ebc24f4f59a94f1674.png", "2020")
  ];

  getAllTasks(): MyTask[]{
    return this.tasksList.slice();
  }

  addTask(newTask: MyTask){
    this.tasksList.push(newTask);
    this.refreshTaskList.emit(this.tasksList.slice());
  }
}
