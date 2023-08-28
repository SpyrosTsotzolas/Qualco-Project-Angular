import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { CountryStats } from '../model/country-stats';

@Injectable({
  providedIn: 'root'
})
export class CountryStatsService {

  private countriesUrl: string;

  constructor(private http: HttpClient) { 
    this.countriesUrl = 'http://localhost:8080/countries-stats';
  }

  public getCountryStatsWithMaxRatio(): Observable<CountryStats[]> {

    return this.http.get<CountryStats[]>(this.countriesUrl);
  }

}




