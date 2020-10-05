import { Component, Input, OnInit } from '@angular/core';
import {Event} from "../event.model";

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit {
  panelOpenState = false;
  @Input() isHidden: boolean;

  constructor() { }
  ngOnInit(): void {
  }
  expandPanel(){
    this.panelOpenState = !this.panelOpenState;
  }
}
