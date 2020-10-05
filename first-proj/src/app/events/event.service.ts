import { EventEmitter, Injectable } from '@angular/core';
import {Event } from './event.model'
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  refreshList = new EventEmitter<Event[]>();
  getEventEdit = new EventEmitter<Event>();

  eventEdited: Event;
  events: Event [] = [
    {id: uuid.v4(), name: "JS event" , description:"some event", iamge_url:"https://s3.tproger.ru/uploads/2017/04/nodejs-web-scraping-880x308.png", dateStarted:"2020" , visible:false},
    {id: uuid.v4(), name: "C event" , description:"some1 event", iamge_url:"https://programmerspoint.in/images/c-programming-course.png", dateStarted:"2020", visible:true},
    {id: uuid.v4(), name: "C event" , description:"some1 event", iamge_url:"https://programmerspoint.in/images/c-programming-course.png", dateStarted:"2020" , visible:true},
    {id: uuid.v4(), name: "P event" , description:"some2 event", iamge_url:"https://d2xzmw6cctk25h.cloudfront.net/post/2236/og_image/39ed77ccb6aab5ebc24f4f59a94f1674.png", dateStarted:"2020", visible:true}
  ];
  getAllEvents(): Event[] {
    return this.events.slice();
  }

  addEvent(newEvent: Event){
    this.events.push(newEvent);
    this.refreshList.emit(this.events.slice());
  }

  getEvent(id: string){
    this.eventEdited = this.events.find(t=> t.id == id);

  }

  sendEvent(){
    return this.eventEdited;
  }
  setEvent(newEvent: Event){
    
    this.getEventEdit.emit(newEvent);
  }



  constructor() { }
}
