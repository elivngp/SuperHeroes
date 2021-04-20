import { UpperCasePipe } from '@angular/common';

import { Component } from '@angular/core';


@Component({
  selector:'app-heroe',
  templateUrl:'./heroe.component.html',
  styleUrls:['./heroe.component.css']
})

export class HeroeComponent {

  nombre: string = 'Saitama';
  edad: number = 30;
  Mayuscula: string = 'SAITAMA';

  ontenerNombre():string{
    return this.nombre + ' - ' + this.edad + ' - ' + this.Mayuscula;
  }

  cambiarNombre():void{
    this.nombre = 'Superman';
  }
  cambiarEdad():void{
    this.edad = 38;
  }
  cambiarMayuscula():void{
    this.Mayuscula = 'SUPERMAN';
  }



}
