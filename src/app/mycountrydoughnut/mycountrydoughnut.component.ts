import { Component, OnInit } from '@angular/core';

import { ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { Covid19StatsService } from 'src/services/covid19-stats.service';
import { Covid19Affected } from 'src/models/covid19-response';

@Component({
  selector: 'app-mycountrydoughnut',
  templateUrl: './mycountrydoughnut.component.html',
  styleUrls: ['./mycountrydoughnut.component.css']
})
export class MycountrydoughnutComponent implements OnInit {
  yourCountry: string = "INDIA"
  confirmed: number;
  recovered: number;
  deaths: number;
  updatedDataAvailable: boolean;
  doughnutChartLabels: Label[] = ['Confirmed', 'Recovered', 'Deaths'];
  doughnutChartData: MultiDataSet;
  doughnutChartType: ChartType = 'doughnut';

  constructor(private covid19StatService: Covid19StatsService) { }

  ngOnInit() {
    this.getYourCountryCovid19Cases();
  }

  getYourCountryCovid19Cases(): void {
    this.covid19StatService.getYourCountryCovid19Cases('IND')
      .subscribe((res: Covid19Affected) => {
        this.confirmed = res.confirmed;
        this.recovered = res.recovered;
        this.deaths = res.deaths;
        this.updatedDataAvailable = true;
        this.doughnutChartData = [
          [this.confirmed, this.recovered, this.deaths]
        ]
      });
  }

}
