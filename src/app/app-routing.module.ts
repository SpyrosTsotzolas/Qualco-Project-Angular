import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list/country-list.component';
import { LanguagesByCountryComponent } from './languages-by-country/languages-by-country.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { CountryStatsFilterComponent } from './country-stats-filter/country-stats-filter.component';

const routes: Routes = [{ path: 'countries', component: CountryListComponent },
                        { path: 'languages/:id', component: LanguagesByCountryComponent },
                        { path: 'countries-stats', component: CountryTableComponent },
                        { path: 'countries-statistics', component: CountryStatsFilterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // sets up the routing configuration for the application. The forRoot method is used to configure the root-level routing.
  exports: [RouterModule]    // make the routing functionality available to other parts of the application
})
export class AppRoutingModule { }
