import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-multicaja-button',
  template: `
    <button
      style="background-color: {{buttonConfig.color}}"
      (click)="click()">{{buttonConfig.title}}
    </button>
  `,
  styles: [
  ]
})
export class MulticajaButtonComponent implements OnInit {

  @Input() buttonConfig: ButtonConfig;
  @Output() clickEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {

   }

  ngOnInit(): void {
  }

  click(): void {
    this.clickEvent.emit(true);
  }

}

export interface ButtonConfig {
  color: string;
  size: string;
  title: string;
}
