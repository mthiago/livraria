import { Component, OnInit } from '@angular/core';
import { GerenciadorService } from '../gerenciador.service';
import { Livro } from '../../model/livro.model';

@Component({
  selector: 'app-gerenciador',
  templateUrl: './gerenciador.component.html',
  styleUrls: ['./gerenciador.component.scss']
})
export class GerenciadorComponent implements OnInit {

  constructor(private gerenciadorService: GerenciadorService) { }

  private livro: Livro

  ngOnInit() {
  }

  exibeCadastro() {
    let div = document.getElementById('cadastrarLivro')
    div.style.display = 'block'
  }

  exibeEditar() {
    let div = document.getElementById('editarLivro')
    div.style.display = 'flex'
  }

  buscaLivroEditar(id) {
    let div = document.getElementById('inputEditarLivro')
    div.style.display = 'block'
    this.livro = this.gerenciadorService.buscaLivroEditar(id)
  }

  editar(titulo, autor, ano) {
    this.gerenciadorService.editar(titulo, autor, ano, this.livro.id)
  }

  cadastrar(titulo, autor, ano) {
    this.gerenciadorService.criar(titulo, autor, ano)
  }

}
