import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-multicaja-card',
  templateUrl: './multicaja-card.component.html',
  styleUrls: ['./multicaja-card.component.scss']
})
export class MulticajaCardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
