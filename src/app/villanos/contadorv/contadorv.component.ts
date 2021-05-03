import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contadorv',
  templateUrl: './contadorv.component.html',
  styleUrls: ['./contadorv.component.css']
})
export class ContadorComponent implements OnInit {


  title = 'CONTADOR';
  numero = 10;
  base = 5;
  constructor() { }

  ngOnInit(): void {
  }

  acumulador(valor:number){
    this.numero += valor;
  }
  sumar(){
    this.numero +=1;
  }
  restar(){
    this.numero -=1;
  }

}
