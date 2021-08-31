import { Component, OnInit } from '@angular/core';
import api from 'src/api'
import { serialize } from 'src/assets/utils'
import mock from './mock';

@Component({
  template: `
    <div class="container block h-full-vh">
      <div class="filter">
        <poke-input
        id="filter-card-input"
        label='Fetch card'
        (value)="filter"
        placeholder="write the name of the card
        "></poke-input>
      </div>
      <div class="cards-list">
        <poke-card 
          *ngFor="let pokemon of pokemons" 
          [pokemon]="pokemon" 
          class="cards-list__card">
        </poke-card>
      </div>
    </div>
    `,
  styleUrls:['./home.component.scss'],
  selector: 'home'
})
export class HomeComponent implements OnInit {
  cards = []
  filter = ''
  currentPage = 1
  totalPages = 1
  pokemons:any = []

  constructor() { }

  ngOnInit(): void {
    const alphabeticOrder = mock.data.sort((a, b) => {
      const itemA = a.name.toLocaleUpperCase()
      const itemB = b.name.toLocaleUpperCase()
      
      return itemA.localeCompare(itemB)
    })
    this.pokemons = alphabeticOrder
  }

  getCards() {
    const params = { page: 1, pageSize: 10}

    console.log(params)
    return api.get(`cards?${serialize(params)}`)
      .then(({ data }) => {
        this.pokemons = data.data
      })
  }
}
