import { Component } from '@angular/core';
//import api from 'src/api'
//import { serialize } from 'src/assets/utils'
import { mock } from './mock'

@Component({
  template: `
    <div class="container">
      <div class="filter mt-5">
        <poke-input
        id="filter-card-input"
        label='Fetch card'
        (changeValue)="onChangeValue($event)"
        placeholder="write the name of the card
        "></poke-input>
      </div>
      <div class="cards-list mt-3">
        <poke-card 
          *ngFor="let pokemon of setPagedList()" 
          [pokemon]="pokemon"
          class="cards-list__card">
        </poke-card>
      </div>
      <div>
        <poke-paginator
          (setPage)="setPage($event)"
          [totalPages]="totalPages"
          [currentPage]="currentPage"
          class="flex justify-center">
        </poke-paginator>
      </div>
    </div>
    `,
  styleUrls:['./home.component.scss'],
  selector: 'home'
})
export class HomeComponent {
  cards = []
  search = ''
  filtredOptions = []
  pokemons = []
  pagedList = []
  totalPages = 1
  currentPage = 0

  constructor() { }

  ngOnInit(): void { this.getCards() }
  setPage(currentPage) {
    this.currentPage = currentPage
  }
  setPagedList() {
    const list = this.filtredOptions || []
    const listPag = []
    let pag = []
    let currentItem = 0
    let limitItems:number = 10

    list.forEach((item, index) => {
      if (!item) return
      if (currentItem <= limitItems) {
        pag.push(item)
        currentItem += 1
      }
      if (currentItem === limitItems) {
        currentItem = 0
        listPag.push(pag)
        pag = []
      }
      if (pag.length < limitItems && index + 1 === list.length) {
        pag.length && listPag.push(pag)
      }
    })
    this.totalPages = listPag.length
    return listPag[this.currentPage]
  }
  filter(options) {
    const capitalize = str => {
      if (typeof str !== 'string') return ''

      return str.charAt(0).toUpperCase() + str.substr(1)
    }
    return options.filter(({ name }) => {
      const filterRegex = new RegExp(capitalize(this.search))

      return filterRegex.test(name)
    })
  }
  onChangeValue(value){
    this.search = value
    this.currentPage = 0
    this.filtredOptions = this.filter(this.pokemons)
  }
  getCards() {
    const alphabeticOrder = mock.data.sort((a, b) => {
      const itemA = a.name.toLocaleUpperCase()
      const itemB = b.name.toLocaleUpperCase()
      
      return itemA.localeCompare(itemB)
    })

    this.pokemons = alphabeticOrder
    this.filtredOptions = alphabeticOrder
  }
}
