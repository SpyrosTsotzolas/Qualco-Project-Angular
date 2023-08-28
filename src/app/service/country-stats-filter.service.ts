import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { CountryStatsFilter } from '../model/country-stats-filter';


@Injectable({
  providedIn: 'root'
})
export class CountryStatsFilterService {

  private countriesUrl: string;

  constructor(private http: HttpClient) { 
    this.countriesUrl = 'http://localhost:8080/countries-statistics';
  }

  public getCountryStatistics(): Observable<CountryStatsFilter[]> {

    return this.http.get<CountryStatsFilter[]>(this.countriesUrl);
  }

}
