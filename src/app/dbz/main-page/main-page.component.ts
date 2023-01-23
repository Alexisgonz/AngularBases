import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../service/dbz.service';
import { DbzModule } from '../dbz.module';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre:'Maestro Rochis',
    poder: 200
  }

  agregarNuevoPersonaje(argPesonaje:Personaje){
    // this.personajes.push(argPesonaje);
  }

  constructor() {
  }
}
