import { Injectable } from '@angular/core';
import { Hero } from './hero'; //Importa la clase Hero de hero.ts (el id y el nombre)
import { HEROES } from './mock-heroes'; //Importa HEROES del mock-heroes.ts (el listado de héroes)

@Injectable({
  providedIn: 'root'
})


export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() {



   }
}
