import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  power = 0;
  calculate(){
    this.power = parseInt((<HTMLInputElement>document.getElementById("powerlvl")).value);
  }
}
