import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ss4',
  templateUrl: './ss4.component.html',
  styleUrls: ['./ss4.component.css']
})
export class Ss4Component implements OnInit {
  @Input() level: number;
  constructor() { }

  ngOnInit() {
  }

}
