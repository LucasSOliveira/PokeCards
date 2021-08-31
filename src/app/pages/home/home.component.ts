import { Component, OnInit } from '@angular/core';
import api from 'src/api'
import { serialize } from 'src/assets/utils'
import mock from './mock';

@Component({
  template: `
    <div class="container test ">
      <poke-card *ngFor="let pokemon of pokemons" [pokemon]="pokemon"></poke-card>
    </div>
    `,
  styleUrls:['./home.component.scss'],
  selector: 'home'
})
export class HomeComponent implements OnInit {
  cards = []
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
