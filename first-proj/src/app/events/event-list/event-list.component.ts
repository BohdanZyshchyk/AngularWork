import { Component, Input, OnInit } from '@angular/core';
import {Event} from "../event.model";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() isHidden: boolean; 
  events: Event [] = [
    { name: "JS event" , description:"some event", iamge_url:"https://s3.tproger.ru/uploads/2017/04/nodejs-web-scraping-880x308.png", dateStarted:"2020" , visible:true},
    { name: "C event" , description:"some1 event", iamge_url:"https://programmerspoint.in/images/c-programming-course.png", dateStarted:"2020", visible:true},
    { name: "C event" , description:"some1 event", iamge_url:"https://programmerspoint.in/images/c-programming-course.png", dateStarted:"2020" , visible:true},
    { name: "P event" , description:"some2 event", iamge_url:"https://d2xzmw6cctk25h.cloudfront.net/post/2236/og_image/39ed77ccb6aab5ebc24f4f59a94f1674.png", dateStarted:"2020", visible:true}
  ];
  constructor() { }

  ngOnInit() {
  }

}
