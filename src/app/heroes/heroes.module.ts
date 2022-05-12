import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ //todo los componentes que van a ser visibles
        ListadoComponent
    ],
    imports:[
        CommonModule//importa la libreria de *ngFor y *ngIf
    ]
})
export class HeroeModule{}