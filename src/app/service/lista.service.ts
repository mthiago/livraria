import { Injectable, OnInit } from '@angular/core';
import { Livro } from '../model/livro.model';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() {
  }

  public livros: Livro[];

  alugar(id) {
    this.livros.forEach(element => {
      if (element.id === id) {
        element.alugado = true;
      }
    });
  }

}
