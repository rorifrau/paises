import { Component, Output, EventEmitter  } from '@angular/core';
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


    

buscar(termino: string){
  
  this.hayError=false;
  this.termino = termino;
  this.paisService.buscarPais(termino).  
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

sugererencia(termino: string){
  console.log(termino);
  this.hayError = false;
  // crear sugerencias 
}

}
