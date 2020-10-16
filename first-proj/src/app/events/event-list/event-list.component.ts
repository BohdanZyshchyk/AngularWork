import { Component, Input, OnInit } from '@angular/core';
import {Event} from "../event.model";
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() isHidden: boolean; 
  @Input() events: Event [];
  page:number = 1;
  total:number;
  constructor(private eventsService: EventService) { }

  ngOnInit() {
    this.events = this.eventsService.getAllEvents();
    this.eventsService.refreshList.subscribe((events: Event []) =>{
      this.events = events;
      this.total = events.length;
    })
  }
  

}
