import { Injectable } from '@angular/core'; //importa el injectable de angular
import { Hero } from './hero'; //Importa la clase Hero de hero.ts (el id y el nombre)
import { HEROES } from './mock-heroes'; //Importa HEROES del mock-heroes.ts (el listado de héroes)
import { Observable, of } from 'rxjs'; //Importa l observable y el of() de rxjs

@Injectable({  // funciona como @Component()
  providedIn: 'root' //inyecta el servicio en el proveedor de servicios de la app, root
})


export class HeroService { //Esporta el servicio

  getHeroes(): Observable<Hero[]> {  //Método para devolver un Observable de Heroes función async
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() {



   }
}
