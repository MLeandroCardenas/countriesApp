import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    public searchCountryById(id: string): Observable<Country | null> {
        const url = `${ this.apiUrl }/alpha/${ id }`;

        return this.http.get<Country[]>(url)
        .pipe(
            map( countries => countries.length > 0 ? countries[0] : null ),
            catchError( () => of(null) )
         ); 
    }

    public searchCapital( term: string ):Observable<Country[]>  {
        return this.http.get<Country[]>(`${ this.apiUrl }/capital/${ term }`)
        .pipe( 
            catchError( () => of([]) )
         );
    }

    public searchCountry( term: string ): Observable<Country[]> {
        // const params = new HttpParams().set('fullText', true);
        // return this.http.get<Country[]>(`${ this.apiUrl }/name/${ term }`, { params })
        return this.http.get<Country[]>(`${ this.apiUrl }/name/${ term }`)
        .pipe( 
            catchError( () => of([]) )
         );
    }

    public searchRegion( region: string ): Observable<Country[]> {
        return this.http.get<Country[]>(`${ this.apiUrl }/region/${ region }`)
        .pipe( 
            catchError( () => of([]) )
         );
    }
    
}