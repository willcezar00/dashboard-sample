import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardMenu } from './dashboard/model/dashboard-menu.model';
import { Atendimento } from './model/atendimento.model';
import { AppService } from './app.service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public dashboardMenu: DashboardMenu[] = [];
  public atendimentos: Atendimento[] = [];
  public data: any;


  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    // the menu could be filled using a requisitions and getting the menu
    // depending on user access level
    let menu = [{
      name: 'Home',
      url: '#'
    },
    {
      name: 'Charts & Statics',
      url: '#chart'
    },
    {
      name: 'Table',
      url: '#table'
    },
    {
      name: 'Contact',
      url: '#contact'
    }
    ]
    this.dashboardMenu = menu;

    this.atendimentos = this.appService.getAtendimentos();


  }
}
