import { UpperCasePipe } from '@angular/common';

import { Component } from '@angular/core';


@Component({
  selector:'app-villano',
  templateUrl:'./villano.component.html',
  styleUrls:['./villano.component.css']
})

export class VillanoComponent {

  nombre: string = 'Tyler';
  edad: number = 33;
  Mayuscula: string = 'TYLER';
  SP: string = 'rap';
  AP: number = 0;

  ontenerNombre():string{
    return this.nombre + ' - ' + this.edad + ' - ' + this.Mayuscula + ' - ' + this.SP + '-' + this.AP + '-' + this.AP + '-' + this.AP + '-' + this.AP + '-' + this.AP + '-' + this.AP + '-' + this.AP + '-' + this.AP + '-' + this.AP + '-' + this.AP;
  }

  cambiarNombre():void{
    this.nombre = 'Kanye West';
  }
  cambiarEdad():void{
    this.edad = 43;
  }
  cambiarMayuscula():void{
    this.Mayuscula = 'KANYE WEST';

  }
  cambiarSP():void{
    this.SP = 'the life of pablo';

  }
  aumentarPoder1():void{
    this.AP = 10;

  }
  aumentarPoder2():void{
    this.AP = 20;

  }
  aumentarPoder3():void{
    this.AP = 30;

  }
  aumentarPoder4():void{
    this.AP = 40;

  }
  aumentarPoder5():void{
    this.AP = 50;

  }
  aumentarPoder6():void{
    this.AP = 60;

  }
  aumentarPoder7():void{
    this.AP = 70;

  }
  aumentarPoder8():void{
    this.AP = 80;

  }
  aumentarPoder9():void{
    this.AP = 90;

  }
  aumentarPoder10():void{
    this.AP = 100;

  }


}
