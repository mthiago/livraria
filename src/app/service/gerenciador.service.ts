import { Injectable } from '@angular/core';
import { ListaService } from './lista.service';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorService {

  constructor(private listaService: ListaService) { }

  private ultimoId: number = 1

  criar(titulo, autor, ano) {
    this.listaService.livros.forEach(element => { 
      if (element.id >= this.ultimoId) {
        this.ultimoId = element.id+1
      }
    });

    let livro = {
      "id": this.ultimoId,
      "titulo": titulo,
      "autor": autor,
      "ano": ano,
      "alugado": false,
      "excluido": false
    }
    this.listaService.livros.push(livro)
  }

  buscaLivroEditar(id) {
    return this.listaService.livros.filter(livro => livro.id == id)[0]
  }

  editar(titulo, autor, ano, id) {
    this.listaService.livros.forEach(element => {
      if (element.id === id) {
        element.titulo = titulo
        element.autor = autor
        element.ano = ano
      }
    });
    console.log(this.listaService.livros)
  }
}
