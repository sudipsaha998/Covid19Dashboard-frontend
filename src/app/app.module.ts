import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Covid19StatsComponent } from './covid19-stats/covid19-stats.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MycountrydoughnutComponent } from './mycountrydoughnut/mycountrydoughnut.component';
import { WorldstatlineComponent } from './worldstatline/worldstatline.component';
import { Covid19HomeComponent } from './covid19-home/covid19-home.component';

@NgModule({
  declarations: [
    AppComponent,
    Covid19StatsComponent,
    NavBarComponent,
    MycountrydoughnutComponent,
    WorldstatlineComponent,
    Covid19HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
