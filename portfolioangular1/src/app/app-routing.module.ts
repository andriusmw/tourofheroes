import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'; //Añado el import

const routes: Routes = [ //Routes le dice al Router a donde ir cuando se clickea.
  { path: 'heroes', component: HeroesComponent } //Path indica lo que se añade a la URL
];                                               // Component: indica el componente a cargar cuando
                                                // se añade la ruta, el path.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
