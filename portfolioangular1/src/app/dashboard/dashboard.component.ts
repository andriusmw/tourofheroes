import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';  //Añado Hero y HeroService para poder llamarlos en el html
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard', //Indica como se llama a esto en el html <app-dashboard>
  templateUrl: './dashboard.component.html', //indica el html
  styleUrls: ['./dashboard.component.css']  //indica su doc específico para css
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];  //Añade LA INTERFAZ Hero como un array con la estructura de Hero.ts
                        //y lo declara vacío. lo llama con "heroes". Importado en línea 2

  constructor(private heroService: HeroService) { } //Le pasa el servicio al constructor

  ngOnInit(): void {
    this.getHeroes(); //LLAMA AL Método para hacer fetchHeroes (cargar la lista de heroes)
  }

  getHeroes(): void { //Declara el método getHeroes para hacer el fetchHeroes
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
      //Esto debe de mostrar los heroes del 1 al 5


    }
}
