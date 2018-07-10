import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { AppService } from './app.service.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    ChartModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
