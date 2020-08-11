import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeSuggestComponent } from './poke-suggest.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokeSuggestPipe } from './poke-suggest.pipe';



@NgModule({
  declarations: [PokeSuggestComponent, PokeSuggestPipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [PokeSuggestComponent]
})
export class PokeSuggestModule { }
