import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons = []

  constructor(private http: HttpClient) { 
    this.carregarPokemons()
  }

  async carregarPokemons(){
    const requisicao = await this.http.get<any>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151').toPromise()

    this.pokemons = requisicao.results

    
  }
}
