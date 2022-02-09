import { Injectable } from '@angular/core'; //Lo importa de las librerías de angular como inject...

@Injectable({
  providedIn: 'root' //lo provee a nivel de root para que toda la app lo pueda llamar
})
export class MessageService { //Exporta lo de dentro del {} bajo el nombre MessageService
 /*/1/*/ messages: string[] = []; // Crea un array de tipo string y lo crea vacío y por si acaso lo vacía

    /*/2/*/ add(message: string) { //a la función add() le pasan el array message y dentro  hace
      this.messages.push(message);   // coge el valor de message DONDE han llamado la función y lo mete
             }                      // al array, al message de arriba. 1



    /*/2/*/ clear() { //la función clear() coge el message de donde la llaman y lo vacía
          this.messages = [];
          }
}

/*-

RESULTA QUE EL EXPORT LO QUE HACE ES:
  como su nombre indica, exporta lo de abajo a donde se llame con MessageService y eso significa
  que las variables y funciones definidas se pueden llamar desde otros archivos , ficheros, sin necesidad
  de declararlas de nuevo , es como añadir una libreria de javascript donde tienes tus funciones y luego
  las puedes llamar. Entonces, hay que tener en cuenta LOS SCOPES de las funciones y variables.
  en add message, se usará por ejemplo la variable message *2* que tendrá un valor variable y a la hora
  de hacer el push se hace push a la variable de arriba, *1 *.

  Lo mismo a la hora del clear(), se limpia la variable *2* ( eso indica también el this. se refiere
    a la de dentro del scope)

-*/
