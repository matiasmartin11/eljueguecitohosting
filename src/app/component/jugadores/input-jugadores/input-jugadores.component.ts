import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IJugador } from 'src/model/interfaces/IJugador';
@Component({
  selector: 'app-input-jugadores',
  templateUrl: './input-jugadores.component.html',
  styleUrls: ['./input-jugadores.component.css']
})
export class InputJugadoresComponent implements OnInit {
  @Input("lista") listaJugadores!:Array<IJugador>
  @Output() outputAddButton = new EventEmitter<IJugador>();
  @Input() numeroJugadores!:number;
  jugadores!:IJugador[];
  public mensajeError:string;
  
  constructor() {
    this.mensajeError = "";
    this.numeroJugadores = 0;
  }

  ngOnInit(): void {
  }

  enviarJugador(nombre:string){
    //expresiones regulares
    const rExpNombre : RegExp = /^[A-Za-z]{1,8}$/;
    
    this.mensajeError = "";
    
    if(rExpNombre.test(nombre)){
      let id:number = this.numeroJugadores;
      let jugadorIntroducido={nombre, id};
      this.outputAddButton.emit(jugadorIntroducido);
    }else{
      this.mensajeError = "Nombre incorrecto";
    }
  }
}