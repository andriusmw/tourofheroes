import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
//añade las librerias de formularios de angular

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Luego de añadir librerias hay que poner el contenido el import aquí para cargarlo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
