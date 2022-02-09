import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'; // Añadimos el servicio messageService

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { } // le pasamos el servicio al constrcutor
                                                        //para poder ser llamado
  ngOnInit(): void {
  }

}

/*
De aquí vamos al template html
*/
