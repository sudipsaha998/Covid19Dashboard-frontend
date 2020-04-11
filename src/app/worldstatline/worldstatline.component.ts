import { Component, OnInit } from '@angular/core';

import { ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { Covid19StatsService } from 'src/services/covid19-stats.service';
import { Covid19Stat, Covid19Affected } from 'src/models/covid19-response';
import { element } from 'protractor';

@Component({
  selector: 'app-worldstatline',
  templateUrl: './worldstatline.component.html',
  styleUrls: ['./worldstatline.component.css']
})
export class WorldstatlineComponent implements OnInit {
  affectedByDate: any;
  dates: string[] = [];
  confirmed: number[] = [];
  recovered: number[] = [];
  deaths: number[] = [];
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'confirmed' },
    { data: [], label: 'recovered' },
    { data: [], label: 'deaths' },
  ];

  lineChartLabels: Label[];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black'
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private covid19StatService: Covid19StatsService) { }

  ngOnInit() {
    this.getCovid19StatByDateWorldwide();
  }

  getCovid19StatByDateWorldwide(): void {
    this.covid19StatService.getCovid19StatByDateWorldwide()
      .subscribe((res: Covid19Stat) => {
        this.dates = this.dates.concat(Object.keys(res.result));
        let data = Object.values(res.result);
        data.forEach((element: Covid19Affected) => {
          this.confirmed.push(element.confirmed);
          this.recovered.push(element.recovered);
          this.deaths.push(element.deaths);
        });

        this.lineChartLabels = this.dates;
        this.lineChartData[0].data = this.confirmed;
        this.lineChartData[1].data = this.recovered;
        this.lineChartData[2].data = this.deaths;
      });
  }
}
