import { Injectable } from '@angular/core';

import { Livro } from '../model/livro.model'

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() {}

  public livros: any = [
    {
        "id": 1,
        "titulo": "Livro 1",
        "autor": "Autor 1",
        "ano": 1991,
        "alugado": true,
        "excluido": false
    },
    {
        "id": 2,
        "titulo": "Livro 2",
        "autor": "Autor 2",
        "ano": 1992,
        "alugado": false,
        "excluido": false
    },
    {
        "id": 3,
        "titulo": "Livro 3",
        "autor": "Autor 3",
        "ano": 1993,
        "alugado": true,
        "excluido": false
    },
    {
      "id": 4,
      "titulo": "Livro 4",
      "autor": "Autor 4",
      "ano": 1994,
      "alugado": false,
      "excluido": false
    },
    {
      "id": 5,
      "titulo": "Livro 5",
      "autor": "Autor 5",
      "ano": 1995,
      "alugado": false,
      "excluido": false
    },
    {
      "id": 6,
      "titulo": "Livro 6",
      "autor": "Autor 6",
      "ano": 1996,
      "alugado": true,
      "excluido": false
    }
    ]

  listar() {
    return this.livros
  }

  alugar(id) {
    this.livros.forEach(element => {
      if (element.id === id) {
        element.alugado = true
      }
    });
  }

  devolver(id) {
    this.livros.forEach(element => {
      if (element.id === id) {
        element.alugado = false
      }
    });
  }

  excluir(id) {
    let itens = this.livros.filter(item => item.id !== id)
    this.livros.forEach(element => {
      if (element.id === id) {
        element.excluido = true
      }
    });
  }

}
