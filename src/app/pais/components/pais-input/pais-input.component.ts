import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {


  termino :string = ""

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();


  debouncer: Subject<string> = new Subject();

  ngOnInit() {

    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      console.log('debouncer:' + valor);
      this.onDebounce.emit(valor);
    });

  }    

  onBuscar(){
    
    console.log("aquí " + this.termino);
    this.onEnter.emit(this.termino);
  
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
  }



}
