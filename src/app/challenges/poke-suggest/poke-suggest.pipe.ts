import { Pipe, PipeTransform } from '@angular/core';
import { SimplePokemonBase } from './poke-suggest.interface';

@Pipe({
  name: 'pokeSuggest'
})
export class PokeSuggestPipe implements PipeTransform {

  transform(pokeArr: SimplePokemonBase[], searchText: string): string[] {
    let searchMatchArr: string[];
    return searchMatchArr;
  }

}
