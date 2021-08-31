import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'poke-input',
  template: `
  <div class="poke-input">
    <label id="id">{{ label }}</label>
    <input
      ref="input"
      [id]="id"
      [placeholder]="placeholder"
      type="input"
      (ngModel)="value"
    />
  </div>
  `,
  styleUrls:['./poke-input.component.scss'],

})
export class PokeInputComponent implements OnInit {

  constructor() {}

  value = ''
  
  ngOnInit(): void {}
  @Input() id: string
  @Input() label: string
  @Input() placeholder: string

}
