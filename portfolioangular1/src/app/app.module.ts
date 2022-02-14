import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
//añade las librerias de formularios de angular

import { HttpClientModule } from '@angular/common/http';
//Añade HttpClient para acceder a servidores

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Luego de añadir librerias hay que poner el contenido el import aquí para cargarlo
    HttpClientModule //1ero se añade 2nd se importa
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
