import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region } from '../model/region';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private regionsUrl: string;

  constructor(private http: HttpClient) { 
    this.regionsUrl = 'http://localhost:8080/regions';
  }

  public getRegions(): Observable<Region[]> {

    return this.http.get<Region[]>(this.regionsUrl);
  }
}
