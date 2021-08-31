import { Component, Input, OnInit } from "@angular/core"

@Component({
  selector: "poke-card",
  template: `
    <div class="card" [ngClass]="setBgCard()">
      <img [src]="pokemon.images.small" alt="pokemon-img"/>
      <div class="flex flex-col">
        <span>Nome: <span>{{ pokemon.name }}</span></span>
        <span>ID: <span>{{ pokemon.id }}</span></span>
        <span>
          Types: <span *ngFor="let type of pokemon.types; last as isLast">{{ type }}<span *ngIf="!isLast">, </span></span>
        </span>
      </div>
    </div>
  `,
  styles: [
    `.card {
      width: 100%;
      max-width: 200px;
      height: 400px;
      padding: 8px;
      cursor: pointer;
    }
    img {
      width: 100%;
    }
    `
  ]
})
export class PokeCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  n
  @Input() pokemon: any
  setBgCard() {
    const type = this.pokemon.types[0].toLowerCase()

    return type 
      ? `bg-${type}`
      : 'bg-default'
  }
}
