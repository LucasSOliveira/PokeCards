import { Component, Input } from "@angular/core"

@Component({
  selector: "poke-card",
  template: `
    <div class="card" [ngClass]="setBgCard()">
      <img [src]="pokemon.images.small" alt="pokemon-img" loading="lazy"/>
      <div class="card__details flex flex-col mt-1-2">
        <div><b>Name: </b><span>{{ pokemon.name }}</span></div>
        <div><b>ID: </b><span>{{ pokemon.id }}</span></div>
        <div><b>Types: </b><span *ngFor="let type of pokemon.types">{{ type }}</span></div>
    </div>
  `,
  styleUrls:['./poke-card.component.scss']
})
export class PokeCardComponent {
  constructor() {}
  @Input() pokemon: any
  setBgCard() {
    const type = this.pokemon.types[0].toLowerCase()

    return type 
      ? `bg-${type}`
      : 'bg-default'
  }
}
