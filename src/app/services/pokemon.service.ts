import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons = []

  private readonly apiEspecie = 'https://pokeapi.co/api/v2/pokemon-species/aegislash'

  constructor(private http: HttpClient) { 
    this.carregarPokemons()
  }

  async carregarPokemons(){
    const requisicao = await this.http.get<any>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251').toPromise()
    this.pokemons = requisicao.results 
  }

  listEspecie(){
    return this.http.get(this.apiEspecie)
  }
}
