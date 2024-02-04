import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.countriesService.searchCountryById( params['id'] )
        .subscribe(country => {
          console.log({country});
        })
    })
  }


}
