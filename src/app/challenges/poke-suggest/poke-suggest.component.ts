import { Component, OnInit } from '@angular/core';
import { PokeSuggestService } from './poke-suggest.service';
import { Config } from 'protractor';
import { SearchFilterPipe } from 'src/app/search-filter.pipe';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SimplePokemonBasePayload, SimplePokemonBase, SimplePokemonBaseDetails } from './poke-suggest.interface';

@Component({
  selector: 'app-poke-suggest',
  templateUrl: './poke-suggest.component.html',
  styleUrls: ['./poke-suggest.component.scss']
})

export class PokeSuggestComponent implements OnInit {
  pokeMatchesArr: SimplePokemonBase[] = [];
  isMatches: boolean = false;
  isPokemonSelected: boolean = false;
  selectedPokemonDetails: SimplePokemonBaseDetails;
  searchText: string;
  searchTextUpdate = new Subject <string>();
  

  constructor(private pokeSuggService: PokeSuggestService) { 
    // Debounce search
    this.searchTextUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
        .subscribe(value => {
          value = value.toLowerCase();
          this.searchPokemon(value);
          if(value.length === 0) {
            this.isMatches = false;
          }
        })
  }

  ngOnInit() {}

  searchPokemon(input: string) {
    this.pokeSuggService.getPokemon()
      .subscribe({
        next: (pokemon: SimplePokemonBasePayload) => {
          this.narrowDownPokemon(input, pokemon.results);
        },
        error: (error) => {
          alert("This database is currently unavailable.");
        }
      });
  }

  narrowDownPokemon(pokeSearch: string, pokeObjArr: SimplePokemonBase[]): SimplePokemonBase[] {
    this.pokeMatchesArr = [];
    for(let i = 0; i < pokeObjArr.length; i++) {
      let currPokemon: SimplePokemonBase = pokeObjArr[i];
      for(let k = 0; k < pokeSearch.length; k++) {
        if(pokeSearch[k] === currPokemon.name[k]) {
          if(k === pokeSearch.length - 1) {
            this.pokeMatchesArr.push(currPokemon);
            if(this.pokeMatchesArr.length > 0) {
              this.isMatches = true;
            }
            break;
          }
        }
        else {
          break;
        }
      }
    }
    if(this.pokeMatchesArr.length === 0) {
      this.isMatches = false;
    }
    return this.pokeMatchesArr;  
  }

  pokemonSelected(selectedPokemon: SimplePokemonBase) {
    this.pokeSuggService.getPokemonDeets(selectedPokemon.url)
      .subscribe({
        next: (pokemonDeets: SimplePokemonBaseDetails) => {
          this.selectedPokemonDetails = pokemonDeets;
          this.isPokemonSelected = true;
          this.isMatches = false;
          // this.searchText = "";
        },
        error: (error) => {
          alert("This database is currently unavailable.");
        }
      });
  }

  onFocus() {
    if(this.searchText.length > 0 && this.pokeMatchesArr.length > 0) {
      this.isMatches = true;
    }
  }

}
