import { UpperCasePipe } from '@angular/common';

import { Component } from '@angular/core';


@Component({
  selector:'app-heroe',
  templateUrl:'./heroe.component.html',
  styleUrls:['./heroe.component.css']
})

export class HeroeComponent {

  nombre: string = 'Frank Ocean';
  edad: number = 29;
  Mayuscula: string = 'FRANK OCEAN';

  ontenerNombre():string{
    return this.nombre + ' - ' + this.edad + ' - ' + this.Mayuscula;
  }

  cambiarNombre():void{
    this.nombre = 'Kanye West';
  }
  cambiarEdad():void{
    this.edad = 38;
  }
  cambiarMayuscula():void{
    this.Mayuscula = 'KANYE WEST';

  }



}
