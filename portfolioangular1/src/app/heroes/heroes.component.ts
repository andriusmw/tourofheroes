import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; //Importa la clase HEROES

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  heroes = HEROES;  //metemos la propiedad heroes en el export para mostrar el contenido del array HEROES

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
         }

         //De alguna manera esto significa que cuando se active la función onSelect, la variable
       //  selectedHero tendrá el valor del let hero en el que se encuentre. Pero que empieza con valor
       // void, vacío, dentro de onSelect() del paréntesisn se ponen las variables a usar. y arriba
       // del todo es lo mismo, dice que la variable selectedHero tendrá el valor de Hero, pero igualmente
       //ese no tiene valor hasta que no se lo pase la funcion onSelect.

  constructor() { }

  ngOnInit(): void {
  }



}
