import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesByCountryComponent } from './languages-by-country.component';

describe('LanguagesByCountryComponent', () => {
  let component: LanguagesByCountryComponent;
  let fixture: ComponentFixture<LanguagesByCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguagesByCountryComponent]
    });
    fixture = TestBed.createComponent(LanguagesByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
