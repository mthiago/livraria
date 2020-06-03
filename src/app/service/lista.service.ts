import { Injectable, OnInit } from '@angular/core';

import { Livro } from '../model/livro.model'

@Injectable({
  providedIn: 'root'
})
export class ListaService implements OnInit {

  constructor() {
  }

  public livros: Livro[]

  ngOnInit() {

  }

  alugar(id) {
    this.livros.forEach(element => {
      if (element.id === id) {
        element.alugado = true
      }
    });
  }

}
