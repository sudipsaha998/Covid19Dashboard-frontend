import { Component, OnInit } from '@angular/core';
import { Covid19StatsService } from 'src/services/covid19-stats.service';
import { Covid19Stat, Covid19Affected } from 'src/models/covid19-response';
import { CountryISO3 } from 'src/assets/countries'

@Component({
  selector: 'app-covid19-stats',
  templateUrl: './covid19-stats.component.html',
  styleUrls: ['./covid19-stats.component.css']
})
export class Covid19StatsComponent implements OnInit {
  confirmed: number;
  recovered: number;
  deaths: number;
  affectedByCountry: any[] = [];
  countries: string[];
  countryCodes: any = CountryISO3;
  flag: boolean;
  constructor(private covid19StatService: Covid19StatsService) { }

  ngOnInit() {
    this.getCovid19StatWorldwide();
    this.getUpdatedCovid19Cases();
  }

  getCovid19StatWorldwide(): void {
    this.covid19StatService.getCovid19StatWorldwide()
      .subscribe((res: Covid19Stat) => {
        this.affectedByCountry = res.result;
        this.countries = Object.assign({}, ...this.affectedByCountry);
        this.flag = true;
      });
  }

  getUpdatedCovid19Cases(): void {
    this.covid19StatService.getUpdatedCovid19Cases()
      .subscribe((res) => {
        this.confirmed = res.result.confirmed;
        this.recovered = res.result.recovered;
        this.deaths = res.result.deaths;
      });
  }

}
