import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'; //Añado el import
import { DashboardComponent } from './dashboard/dashboard.component'; //añadido el dashbord
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; //importando heroDetail

const routes: Routes = [ //Routes le dice al Router a donde ir cuando se clickea.
  { path: 'heroes', component: HeroesComponent }, //Path indica lo que se añade a la URL
                                               // Component: indica el componente a cargar cuando
                                                // se añade la ruta, el path.


  { path: 'dashboard', component: DashboardComponent }, //Añadida ruta del dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //Añadida ruta por defecto
  { path: 'detail/:id', component: HeroDetailComponent } //Añadida ruta de HeroDetail + el id del heroe

 ];
 /*
 This tells the router to match that URL to path: 'heroes' and display
 the HeroesComponent when the URL is something like localhost:4200/heroes.

 */

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Importa el modulo de router y le pasa las rutas
  exports: [RouterModule]
})
export class AppRoutingModule { }
