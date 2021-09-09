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
      [value]="value || ''"
      (keyup)="onKey($event)"
    />
  </div>
  `,
  styleUrls:['./poke-input.component.scss'],

})
export class PokeInputComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}
  @Input() id: string
  @Input() label: string
  @Input() placeholder: string
  @Output() changeValue = new EventEmitter()
  @Input() value: any

  onKey(event) {
    const { value } = event.target
    this.changeValue.emit(value) 
  }
}
