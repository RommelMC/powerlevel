import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ss2',
  templateUrl: './ss2.component.html',
  styleUrls: ['./ss2.component.css']
})
export class Ss2Component implements OnInit {
  @Input() level: number;
  constructor() { }

  ngOnInit() {
  }

}
