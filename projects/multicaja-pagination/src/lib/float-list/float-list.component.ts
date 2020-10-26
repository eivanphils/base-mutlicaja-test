import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-float-list',
  templateUrl: './float-list.component.html',
  styleUrls: ['./float-list.component.scss']
})
export class FloatListComponent implements OnInit {
  @Input() titles: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
