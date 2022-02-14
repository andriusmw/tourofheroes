import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes'; //Importa la clase HEROES --> Ahora se usa el servicio
import { HeroService } from '../hero.service'; // 1- importa el servicio Hero
import { MessageService } from '../message.service'; //importa el servicio MessageService

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {      //esto hace referencia a una función previa de la app
    id: 1,
    name: 'Windstorm'
  };


  heroes: Hero[] = []; // 2- Se cambia lo anterior por esto, es comon otro vínculo necesario en el export

  selectedHero?: Hero;  //Ya no se llama, lo dejo para recordarlo




  constructor(private heroService: HeroService, private messageService: MessageService) { }
  // 3- Se añade el servicio al constructor

  getHeroes(): void { // 4- Método para recibir el servicio del constructor
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes(); //5- Se llama al método que recibe el servicio del constructor
  }

  onSelect(hero: Hero): void { //Ya no se llama pero lo dejo para recordarlo
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  /*-
  Declaramos el método add(). que se le llama desde el input de add hero.

  When the given name is non-blank, the handler creates a Hero-like object from
  the name (it's only missing the id) and passes it to the services addHero() method.

When addHero() saves successfully, the subscribe() callback receives the new hero and
pushes it into to the heroes list for display.

  -*/


}
