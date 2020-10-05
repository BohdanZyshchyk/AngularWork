import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  name: string;
  description: string;
  iamge_url: string;
  dateStarted: string;
  eventEdit:Event;
  constructor(private eventService: EventService) { }
  ngOnInit() {
  }

  sendNewEvent(){
    const myId = uuid.v4();
    const event = new Event(myId, this.name,this.description,this.iamge_url,this.dateStarted,true);
    this.eventService.addEvent(event);
  }

  getEditEvent(){
    this.eventEdit = this.eventService.sendEvent()
    this.name= this.eventEdit.name;
  }

}
