import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button-pay',
  templateUrl: './button-pay.component.html',
  styleUrls: ['./button-pay.component.scss']
})
export class ButtonPayComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
