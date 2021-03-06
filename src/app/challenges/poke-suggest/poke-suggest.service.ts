import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimplePokemonBasePayload, SimplePokemonBaseDetails } from './poke-suggest.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeSuggestService {
  pokeUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=964';
  
  constructor(private http: HttpClient) { }

  // MAKE THINGY THAT KEEPS TRACK OF POKEMON INDEX NUMBER & NAME
    getPokemon(): Observable<SimplePokemonBasePayload> {
      if(this.pokeUrl) {
        return this.http.get<SimplePokemonBasePayload>(this.pokeUrl);
      }
      else {
        return;
      }
    }

    getPokemonDeets(pokeLink: string):Observable<SimplePokemonBaseDetails> {
      return this.http.get<SimplePokemonBaseDetails>(pokeLink);
    }
  
}
