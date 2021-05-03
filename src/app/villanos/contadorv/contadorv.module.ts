import { ContadorComponent } from './../contadorv/contadorv.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[

  ContadorComponent
  ],
  exports:[

    ContadorComponent
  ],
  imports:[
    CommonModule
  ]
})
export class ContadorModule{

}
