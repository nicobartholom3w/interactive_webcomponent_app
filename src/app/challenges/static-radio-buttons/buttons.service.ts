import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {
  buttons: String[] = ["sort by price", "sort by name", "sort by relevance"];
  constructor() { }


}
