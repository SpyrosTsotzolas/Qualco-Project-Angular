import { Component, OnInit } from '@angular/core';
import { CountryStatsService } from '../service/country-stats.service';
import { CountryStats } from '../model/country-stats';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit{

  countries: CountryStats[];

  constructor(private countryStatsService: CountryStatsService) {
  }

  ngOnInit() {
    this.countryStatsService.getCountryStatsWithMaxRatio().subscribe(data => {
      this.countries = data;
    });
  }

}
