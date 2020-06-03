import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Livro } from './../model/livro.model'

@Injectable()
export class DataService {
    public listaLivro: Livro[]

    public messageSource = new BehaviorSubject(this.listaLivro)

    currentMessage = this.messageSource.asObservable()

    constructor() {
        this.listaLivro = [{
                "id": 1,
                "titulo": "Livro 1",
                "autor": "Autor 1",
                "ano": 1991,
                "alugado": true
            },
            {
                "id": 2,
                "titulo": "Livro 2",
                "autor": "Autor 2",
                "ano": 1992,
                "alugado": false
            },
            {
                "id": 3,
                "titulo": "Livro 3",
                "autor": "Autor 3",
                "ano": 1993,
                "alugado": true
            },
            {
              "id": 4,
              "titulo": "Livro 4",
              "autor": "Autor 4",
              "ano": 1994,
              "alugado": false
            },
            {
              "id": 5,
              "titulo": "Livro 5",
              "autor": "Autor 5",
              "ano": 1995,
              "alugado": false
            },
            {
              "id": 6,
              "titulo": "Livro 6",
              "autor": "Autor 6",
              "ano": 1996,
              "alugado": true
            }]
    }

    changeLivros(livros: Livro[]) {
      console.log(livros)
        this.messageSource.next(livros)
    }


}


