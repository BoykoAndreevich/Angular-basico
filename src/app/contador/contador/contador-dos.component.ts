import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-dos',
  //templateUrl: './app.component.html',
  //podemos usar uno de estos dos
  template:`
    <h1>Hola Mundo</h1>

    <h2>{{title}}</h2>

    <h3>{{1+1}}</h3>

    <h4>La base es : <strong>{{base}}</strong></h4>

    <button (click)="sumar();">+1</button>

    <span>{{numero}}</span>

    <button (click)="numero = numero - 1">-1</button>

    <button (click)="acumular(-base)">{{base}}</button>`,

})

export class ContadorComponent { //la clase es una instancia
  public title: string = 'Contador App';
  numero: number = 10;
  public base: number = 5;

  sumar(){
    this.numero +=1;
  }

  acumular( valor : number){
    this.numero += valor;
  }
}