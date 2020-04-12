import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { Covid19StatsService } from 'src/services/covid19-stats.service';
import { CountryISO3 } from 'src/assets/countries'
import { IpLocationService } from 'src/services/ip-location.service';

@Component({
  selector: 'app-mycountrydoughnut',
  templateUrl: './mycountrydoughnut.component.html',
  styleUrls: ['./mycountrydoughnut.component.css']
})
export class MycountrydoughnutComponent implements OnInit, OnChanges {
  @Input() countryDataSet: any;
  yourCountry: string;
  yourCountryISO3: string;
  ipAddress: string;
  confirmed: number;
  recovered: number;
  deaths: number;
  updatedDataAvailable: boolean;
  doughnutChartLabels: Label[] = ['Confirmed', 'Recovered', 'Deaths'];
  doughnutChartData: MultiDataSet;
  doughnutChartType: ChartType = 'doughnut';

  constructor(private covid19StatService: Covid19StatsService, private ipLocationService: IpLocationService) { }


  ngOnChanges(): void {
    this.getUserLocation();
  }

  ngOnInit() {
    //this.getUserLocation();
  }
  /*
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
    */

  updateDoughnutChart(): void {
    if (this.countryDataSet) {
      this.confirmed = this.countryDataSet[this.yourCountryISO3] ? this.countryDataSet[this.yourCountryISO3].confirmed : 0;
      this.recovered = this.countryDataSet[this.yourCountryISO3] ? this.countryDataSet[this.yourCountryISO3].recovered : 0;
      this.deaths = this.countryDataSet[this.yourCountryISO3] ? this.countryDataSet[this.yourCountryISO3].deaths : 0;

      this.doughnutChartData = [
        [this.confirmed, this.recovered, this.deaths]
      ];
      this.updatedDataAvailable = true;
    }
  }

  getUserLocation(): void {
    this.ipLocationService.getIPAddress().subscribe((res: any) => {
      //this.ipAddress = res.ip;
      this.ipLocationService.getLocationFromIp(res.ip).subscribe((res: any) => {
        this.yourCountry = res.country_name;
        this.yourCountryISO3 = res.country_code_iso3;
        this.updateDoughnutChart();
      });
    },
      error => {
        this.yourCountry = 'INIDA';
        this.yourCountryISO3 = 'IND';
        this.updateDoughnutChart();
      });
  }

}
