import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ss3',
  templateUrl: './ss3.component.html',
  styleUrls: ['./ss3.component.css']
})
export class Ss3Component implements OnInit {
  @Input() level: number;
  constructor() { }

  ngOnInit() {
  }

}
