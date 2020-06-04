import { Injectable, OnInit } from '@angular/core';
import { Livro } from '../model/livro.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private data: DataService) {
  }

  public livros: Livro[];

  alugar(id) {
    this.data.listaLivro.forEach(element => {
      if (element.id === id) {
        element.alugado = true;
      }
    });
  }

}
