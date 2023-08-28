import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Language } from '../model/language';
import { Observable } from  'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languagesUrl: string;
  private country_id: number;

  constructor(private http: HttpClient) {

    this.languagesUrl = 'http://localhost:8080/languages/';
    
  }

  setCountryId(id: number) {
    this.country_id = id;
    this.languagesUrl = 'http://localhost:8080/languages/' + this.country_id;
  }


  public getLanguagesByCountryId(): Observable<Language[]> {

    return this.http.get<Language[]>(this.languagesUrl);
  }
}


