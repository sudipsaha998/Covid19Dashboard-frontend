import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyLocation, MyIp } from 'src/models/ipLocation-response';

@Injectable({
  providedIn: 'root'
})
export class IpLocationService {

  constructor(private http: HttpClient) { }

  getIPAddress(): Observable<MyIp> {
    return this.http.get<MyIp>("https://api.ipify.org/?format=json");
  }

  getLocationFromIp(ip: string): Observable<MyLocation> {
    return this.http.get<MyLocation>(`https://ipapi.co/${ip}/json/`);
  }
}
