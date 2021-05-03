import { ListadoComponent } from './listadov/listadov.component';
import { VillanoComponent } from './villano/villano.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    VillanoComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent,
    VillanoComponent
  ],

  imports: [
    CommonModule
  ]

})
export class VillanosModule{

}
