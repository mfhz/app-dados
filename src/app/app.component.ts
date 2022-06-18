import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dadpoIzquierdo = '../assets/img/dice1.png';
  daddoDerecho = '../assets/img/dice4.png';
  numero1 = 1;
  numero2 = 4;


  tirarDados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadpoIzquierdo = '../assets/img/dice' + this.numero1 + '.png';
    this.daddoDerecho = '../assets/img/dice' + this.numero2 + '.png';
  }

}
