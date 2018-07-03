import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { console.log('PMI Dashboard Loaded'); }

  ngOnInit() {
  }

}
