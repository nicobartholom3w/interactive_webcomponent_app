import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeSuggestComponent } from './poke-suggest.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PokeSuggestComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PokeSuggestComponent]
})
export class PokeSuggestModule { }
