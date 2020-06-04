import { Injectable } from '@angular/core';
import { ListaService } from './lista.service';
import { Livro } from '../model/livro.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorService {

  constructor(private listaService: ListaService, private data: DataService) {}

  private ultimoId: any = 1;
  public livros: Livro[];

  criar(titulo, autor, ano) {
    this.data.listaLivro.forEach(element => {
      if (element.id >= this.ultimoId) {
        this.ultimoId = element.id + 1;
      }
    });

    const livro = {
      id: this.ultimoId,
      titulo: titulo,
      autor: autor,
      ano: ano,
      alugado: false,
      excluido: false
    };
    this.data.listaLivro.push(livro);
  }

  buscaLivroEditar(id) {
    return this.data.listaLivro.filter(livro => livro.id === id)[0];
  }

  editar(titulo, autor, ano, id) {
    this.data.listaLivro.forEach(element => {
      if (element.id === id) {
        element.titulo = titulo;
        element.autor = autor;
        element.ano = ano;
      }
    });
  }

  excluir(id) {
    const livros: any = [];
    this.data.listaLivro.forEach(element => {
      if (element.id !== id) {
        livros.push(element);
      }
    });

    this.livros = livros;
    this.data.changeLivros(this.livros);
    return livros;
  }

}

