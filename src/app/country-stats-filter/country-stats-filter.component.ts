import { Component, NgModule, OnInit } from '@angular/core';
import { Region } from '../model/region';
import { CountryStatsFilterService } from '../service/country-stats-filter.service';
import { CountryStatsFilter } from '../model/country-stats-filter';
import { RegionService } from '../service/region.service';

@Component({
  selector: 'app-country-stats-filter',
  templateUrl: './country-stats-filter.component.html',
  styleUrls: ['./country-stats-filter.component.css']
})
export class CountryStatsFilterComponent implements OnInit {

  regions: Region[]; 
  countryStats: CountryStatsFilter[]; 
  filteredData: CountryStatsFilter[]; 
  selectedRegion: string = '';
  dateFrom: number;
  dateTo: number;

  constructor(private countryStatsFilterService: CountryStatsFilterService, private regionService: RegionService) { }

  ngOnInit(): void {
    this.regionService.getRegions().subscribe(data => {
      this.regions = data;
    });
    this.countryStatsFilterService.getCountryStatistics().subscribe(data => {
      this.countryStats = data;
    });
    this.filteredData = this.countryStats; 
    console.log(this.filteredData[1].continent_name);

  }

  filterData(): void {
    this.filteredData = this.countryStats.filter(country => {
      return (
        (this.selectedRegion === '' || country.region_name === this.selectedRegion) &&
        (!this.dateFrom || country.year >= this.dateFrom) &&
        (!this.dateTo || country.year <= this.dateTo)
      );
    });
  }

}
