import { Component, OnInit } from '@angular/core';
import { GerenciadorService } from '../gerenciador.service';
import { Livro } from '../../model/livro.model';
import { DataService } from '../../service/data.service'

@Component({
  selector: 'app-gerenciador',
  templateUrl: './gerenciador.component.html',
  styleUrls: ['./gerenciador.component.scss']
})
export class GerenciadorComponent implements OnInit {

  private livro: Livro
  private divCadastrar: any
  private divEditar: any
  private divEditarTabela: any
  private inputEditar: any
  private inputExcluir: any
  private divExcluir: any

  public livros: Livro[]

  constructor(private gerenciadorService: GerenciadorService, private data: DataService) {
    this.livro = {
      'id': 1,
      'titulo': '',
      'autor': '',
      'ano': 1,
      'alugado': false
    }
    this.data.currentMessage.subscribe((livros) => this.livros = livros);
    console.log(this.livros);
  }

  ngOnInit() {
    this.divCadastrar = document.getElementsByClassName('gerenciador__cadastrar')[0]
    this.divEditar = document.getElementsByClassName('gerenciador__editar')[0]
    this.divExcluir = document.getElementsByClassName('gerenciador__excluir')[0]
    this.divEditarTabela = document.getElementsByClassName('gerenciador__editar-tabela')[0]
    this.inputEditar = document.getElementById('inputEditar')
    this.inputExcluir = document.getElementById('inputExcluir')
  }

  exibeCadastro() {
    this.divCadastrar.style.display = 'flex'
    this.escondeDiv(this.inputEditar)
    this.escondeDiv(this.divEditar)
    this.escondeDiv(this.divEditarTabela)
  }

  exibeEditar() {
    this.inputEditar.style.display = 'flex'
    this.divEditar.style.display = 'flex'
    this.escondeDiv(this.divCadastrar)
  }

  exibeExcluir() {
    this.inputExcluir.style.display = 'flex'
    this.divExcluir.style.display = 'flex'
    this.escondeDiv(this.divCadastrar)
  }

  escondeDiv(div) {
    div.style.display = 'none'
  }

  buscaLivroEditar(id) {
    this.escondeDiv(this.inputEditar)
    this.divEditar.style.display = 'flex'
    this.divEditarTabela.style.display = 'flex'
    this.livro = this.gerenciadorService.buscaLivroEditar(id)
  }

  editar(titulo, autor, ano) {
    this.escondeDiv(this.inputEditar)
    this.gerenciadorService.editar(titulo, autor, ano, this.livro.id)
  }

  cadastrar(titulo, autor, ano) {
    this.gerenciadorService.criar(titulo, autor, ano)
    this.escondeDiv(this.divCadastrar)
  }

  excluir(id) {
    this.livros = this.gerenciadorService.excluir(id)
  }

}
