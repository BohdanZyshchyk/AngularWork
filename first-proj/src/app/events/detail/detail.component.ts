import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Event} from "../event.model";
import { EventService } from '../../events/event.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  currentEvent : Event;
  @Input() index: number; 
  isPriority: boolean = false;
  isVisible: boolean = false;
  eventId: string;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.eventId = params["id"];
      let events = this.eventService.getAllEvents();
      this.currentEvent = events.find(t => t.id == this.eventId);
    });
  }

}
