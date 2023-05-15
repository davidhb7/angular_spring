import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  miLista: string[] =['Hamburguesas', 'Perro Caliente', 'Salchipapa','Sandwich Cubano'];
  habilitar: boolean = true;
  constructor() {
  }
  habilitador():void{
    this.habilitar = (this.habilitar==true) ? false:true;
  }
}
