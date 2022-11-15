import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;

  paises: Country[] = [];


  constructor( 
    private paisService: PaisService
    ) { }


buscar(){
  
  this.hayError=false;
  this.paisService.buscarPais(this.termino).
  
  subscribe( (resp) => {
      console.log (resp);      
      this.paises = resp;
    }, 
    (err) =>{
      console.log ("Error", err);
      this.paises = [];
      this.hayError=true;
    });
}

}
