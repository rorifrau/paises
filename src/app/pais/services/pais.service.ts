import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable()
export class PaisService {

  private apiUrl = 'https://restcountries.com/v2';
  
  constructor( 
    private http: HttpClient
    ){}

  buscarPais( termino: string): Observable<Country[]>{
    
    const url = `${ this.apiUrl }/name/${termino} `;
    
    return this.http.get<Country[]>(url);

  }

  // buscar(termino: string): Country[]{
      
  //   let paises: Country[];

  //   this.buscarPais(termino).
    
  //   subscribe( (resp) => {
  //       console.log (resp);      
        
  //       paises = resp;
  //     }, 
  //     (err) =>{
  //       console.log ("Error", err);
  //       paises = [];
        
  //     });

  //     return paises;
  // }


}