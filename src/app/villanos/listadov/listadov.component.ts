import { Component} from '@angular/core';

@Component({
  selector: 'app-listadov',
  templateUrl: './listadov.component.html',
  styleUrls: ['./listadov.component.css']
})
export class ListadoComponent {



  villanos: string[] = ['A$AP ROCKY','JAY Z','KID CUDI','THE WEEKND','DRAKE'];
  eliminar: string[] = [] ;
  acumulador:number = 5;
  indice:number = 0;


  removeItem(i: number){

    this.acumulador = this.acumulador--;
    this.indice=this.indice+i;
    this.eliminar = this.villanos.splice(i,1);


  }
}
