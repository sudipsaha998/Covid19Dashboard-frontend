import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Covid19StatsComponent } from '../covid19-stats/covid19-stats.component';

@Component({
  selector: 'app-covid19-home',
  templateUrl: './covid19-home.component.html',
  styleUrls: ['./covid19-home.component.css']
})
export class Covid19HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(Covid19StatsComponent, { static: false }) covid19Stat: Covid19StatsComponent;
  countryDataSet: any;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.countryDataSet = this.covid19Stat.countries;
    }, 1000)

    console.log("after view init");
  }

  ngOnInit() {
  }

}
