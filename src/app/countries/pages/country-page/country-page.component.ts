import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService) { }
    

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryById( id ))
      )
      .subscribe( country => {
        if(!country) {
          return this.router.navigateByUrl('')
        }
        console.log('tenemos un país');
        return;
      }) 

    // this.activatedRoute.params.subscribe( params => {
    //   this.countriesService.searchCountryById( params['id'] )
    //     .subscribe(country => {
    //       console.log({country});
    //     })
    // })
  }

}
