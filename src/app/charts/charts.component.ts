import { Component, OnInit, Input } from '@angular/core';
import { Atendimento } from '../model/atendimento.model';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @Input() atendimentos: Atendimento[] = [];

  /**
   * data Chart could be created depending on type of chart
   */
  public dataChart: any;
  /**
   * options of displaying chart,this could be get be @Input to make it more dynamic
   */
  public options: any;

  constructor() { }

  ngOnInit() {

    this.dataChart = {
      labels: this.atendimentos.map((atendimento) => atendimento.dataView),
      datasets: [
        {
          backgroundColor: '#224A72',
          borderColor: '#224A72',
          data: this.atendimentos.map((atendimento) => Math.abs(atendimento.capacidade - atendimento.atendimentoRealizado))
        }
      ]
    }

    this.options = {
      title: {
        display: true,
        text: 'Diferença entre "Capacidade" e "Atendimentos Realizados"',
        fontSize: 16
      },
      legend: {
        display: false
      }
    };
  }
}
