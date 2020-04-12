import { Component, OnInit, PipeTransform } from '@angular/core';
import { Covid19StatsService } from 'src/services/covid19-stats.service';
import { Covid19Stat, Covid19Affected } from 'src/models/covid19-response';
import { CountryISO3 } from 'src/assets/countries'

import { FormControl } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  countries: any;
  countryCodes: Observable<any[]> = of(CountryISO3);
  page: number = 1;
  pageSize: number = 25;
  collectionSize = CountryISO3.length;
  flag: boolean;
  countries$: Observable<any[]>;
  filter = new FormControl('');
  constructor(private covid19StatService: Covid19StatsService) {

  }

  ngOnInit() {
    this.getCovid19StatWorldwide();
    this.getUpdatedCovid19Cases();
    //this.countryCodes = of(CountryISO3.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize));
    this.countryCodes = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text))
    );

    console.log("on init");
  }

  search(text: string): any[] {
    //let countries = CountryISO3.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + 100);
    return CountryISO3.filter(country => {
      const term = text.toLowerCase();
      return country['Country'].toLowerCase().includes(term);
    });
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
