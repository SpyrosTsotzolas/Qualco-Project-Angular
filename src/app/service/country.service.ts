import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesUrl: string;

  constructor(private http: HttpClient) { 
    this.countriesUrl = 'http://localhost:8080/countries';
  }

  public findAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl);
  }

}
