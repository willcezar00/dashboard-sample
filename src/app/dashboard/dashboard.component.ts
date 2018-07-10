import { Component, OnInit, Input, Output } from '@angular/core';
import { DashboardMenu } from './model/dashboard-menu.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() dashboardMenu: DashboardMenu[] = [];
  public toggleSidebar = false;

  constructor() { }

  ngOnInit() {

  }
  preventRedirect() {
    return false;
  }

  toggleSideBar() {
    this.toggleSidebar = !this.toggleSidebar;
    return false;
  }
}
