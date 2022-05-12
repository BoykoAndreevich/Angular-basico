import { Component } from '@angular/core';

//cambios en el template del componente
@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    public nombre: string = 'Ironman';
    edad: number = 45;

    get nombreMayusculas(){
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;//templetes
        //o 
        //return this.nombre + ' - ' + this.edad;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
    


}