import { Component, OnInit, Input } from '@angular/core';

import { ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { Covid19StatsService } from 'src/services/covid19-stats.service';
import { CountryISO3 } from 'src/assets/countries'
import { IpLocationService } from 'src/services/ip-location.service';
import { Covid19Affected } from 'src/models/covid19-response';

@Component({
  selector: 'app-mycountrydoughnut',
  templateUrl: './mycountrydoughnut.component.html',
  styleUrls: ['./mycountrydoughnut.component.css']
})
export class MycountrydoughnutComponent implements OnInit {
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

  ngOnInit() {
    this.getUserLocation();
  }

  getYourCountryCovid19Cases(country: string): void {
    this.covid19StatService.getYourCountryCovid19Cases(country)
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


  getUserLocation(): void {
    this.ipLocationService.getIPAddress().subscribe((res: any) => {
      //this.ipAddress = res.ip;
      this.ipLocationService.getLocationFromIp(res.ip).subscribe((res: any) => {
        this.yourCountry = res.country_name;
        this.yourCountryISO3 = res.country_code_iso3;
        this.getYourCountryCovid19Cases(this.yourCountryISO3);
      });
    },
      error => {
        this.yourCountry = 'INDIA';
        this.yourCountryISO3 = 'IND';
        this.getYourCountryCovid19Cases(this.yourCountryISO3);
      });
  }

}
