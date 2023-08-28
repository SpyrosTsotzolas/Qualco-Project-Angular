import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './service/country.service';
import { LanguageService } from './service/language.service';
import { LanguagesByCountryComponent } from './languages-by-country/languages-by-country.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { CountryStatsService } from './service/country-stats.service';
import { CountryStatsFilterComponent } from './country-stats-filter/country-stats-filter.component';
import { CountryStatsFilterService } from './service/country-stats-filter.service';
import { FormsModule } from '@angular/forms';
import { RegionService } from './service/region.service';

@NgModule({
  declarations: [  // in order to be availabe 
    AppComponent,
    CountryListComponent,
    LanguagesByCountryComponent,
    CountryTableComponent,
    CountryStatsFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CountryService, LanguageService, CountryStatsService, RegionService, CountryStatsFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
