import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador-dos.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ]
})
export class ContadorModule{

}