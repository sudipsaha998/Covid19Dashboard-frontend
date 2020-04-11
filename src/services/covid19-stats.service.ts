import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Covid19Stat, Covid19Affected } from 'src/models/covid19-response';


@Injectable({
    providedIn: 'root',
})
export class Covid19StatsService {

    constructor(private http: HttpClient) { }

    getCovid19StatWorldwide(): Observable<Covid19Stat> {
        return this.http.get<Covid19Stat>('http://localhost:8080/global/latest');
    }

    getUpdatedCovid19Cases(): Observable<Covid19Stat> {
        return this.http.get<Covid19Stat>('http://localhost:8080/global/total');
    }

    getYourCountryCovid19Cases(country: string): Observable<Covid19Affected> {
        return this.http.get<Covid19Affected>(`http://localhost:8080/country/${country}/latest`);
    }

    getCovid19StatByDateWorldwide(): Observable<Covid19Stat> {
        return this.http.get<Covid19Stat>('http://localhost:8080/global/date');
    }
}