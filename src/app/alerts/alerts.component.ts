import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  template: `
    <app-success></app-success>
    <app-warning></app-warning>
    <app-error></app-error>
  `,
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
