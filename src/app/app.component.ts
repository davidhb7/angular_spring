import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido mi primera App';
  curso : String = 'Uso Spring 5 y Angular 7';
  yo : String = "David Herrera Bermúdez";
}
