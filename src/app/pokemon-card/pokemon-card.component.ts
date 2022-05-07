
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon?: string;
  @Input() numero: any;

  listEspecie: any

  pegarImagemPokemon(){
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }

  constructor( private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.listEspecie().subscribe( dados => this.listEspecie = dados)
  }

}
