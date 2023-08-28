import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Language } from '../model/language';
import { LanguageService } from '../service/language.service';

@Component({
  selector: 'app-languages-by-country',
  templateUrl: './languages-by-country.component.html',
  styleUrls: ['./languages-by-country.component.css']
})
export class LanguagesByCountryComponent implements OnInit{

  id: number;
  languages: Language[];

  constructor(private languageService: LanguageService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!  // The + before it is used to convert the value from a string to a number. The ! at the end is a non-null assertion operator, indicating that the value won't be null
    });
    this.languageService.setCountryId(this.id)
    this.languageService.getLanguagesByCountryId().subscribe(data => {
      this.languages = data;
    });
  }

}
