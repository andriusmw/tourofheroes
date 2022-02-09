import { Injectable } from '@angular/core'; //importa el injectable de angular
import { Hero } from './hero'; //Importa la clase Hero de hero.ts (el id y el nombre)
import { HEROES } from './mock-heroes'; //Importa HEROES del mock-heroes.ts (el listado de héroes)
import { Observable, of } from 'rxjs'; //Importa l observable y el of() de rxjs
import { MessageService } from './message.service'; //Importa el servicio MessageService dentro de este serv

@Injectable({  // funciona como @Component()
  providedIn: 'root' //inyecta el servicio en el proveedor de servicios de la app, root
})


export class HeroService { //Esporta el servicio

  getHeroes(): Observable<Hero[]> { //Devuelve un mensaje cuando tiene un observable
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes'); //Se le llama al servicio
    return heroes;
  }

  constructor(private messageService: MessageService) { } //Se declara el servicio en el constructor
}

/*
hemos añadido messageService aquí para poder llamarlo cuando haya un observable de Heroes, en ese
momento se llama a messageService para pasarle el valor "fetched heroes" al message del scope principal
del servicio MessageService ( el 1). Ahora iremos al componente del mensaje, para mostrar
el contenido del messsage ( el contenido de 1)

Al principio siempre sale fetched porque cuando carga la página, el servicio llama a getHeroes
(simulamos que ha cargado con el mock) y luego cuando clicamos, el mensaje devuelve el id del heroe
clickado

*/
