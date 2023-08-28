import { Component, OnInit } from '@angular/core';
import { Country } from '../../model/country';
import { CountryService } from '../../service/country.service';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.findAll().subscribe(data => {
      this.countries = data;
    });
  }
}
