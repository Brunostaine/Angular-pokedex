import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent  {
  
  

  constructor(public pokemonService: PokemonService) { }

  


}
