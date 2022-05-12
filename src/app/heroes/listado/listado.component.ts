import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { //ciclo de vida, sirve para inicializar cosas
  }

  heroes : string [] = ['Hulk', 'Spiderman', 'Ironman', 'Thanos'];
  heroeBorrado: string  | undefined = '';
  apareceLetras: boolean = false;

  borrarHeroe(){
    //this.heroes.slice(0,1);
    this.heroeBorrado = this.heroes.shift()  || '';
    this.apareceLetras = true;
    console.log(this.heroes)
  }
  //control + . corregir fallos
  //control + barra espacio ver cada metodo lo que hace
}