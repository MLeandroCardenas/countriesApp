import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    public searchCapital( term: string ):Observable<Country[]>  {
        return this.http.get<Country[]>(`${ this.apiUrl }/capital/${ term }`)
        .pipe( 
            catchError( () => of([]) )
         );
    }
    
}