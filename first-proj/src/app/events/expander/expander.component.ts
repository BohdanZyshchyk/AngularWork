import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit {
  panelOpenState = false;
  constructor() { }
  ngOnInit(): void {
  }
  expandPanel(){
    this.panelOpenState = !this.panelOpenState;
  }
}
