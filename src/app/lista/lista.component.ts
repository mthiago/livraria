import { Component, OnInit } from '@angular/core';
import { Livro } from '../model/livro.model';
import { ListaService } from '../service/lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  private livros: Livro[]

  constructor(private listaService: ListaService) { }

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.livros = this.listaService.listar()
  }

  alugar(id) {
    this.listaService.alugar(id)
  }

  devolver(id) {
    this.listaService.devolver(id)
  }

  excluir(id) {
    this.listaService.excluir(id)
  }

}
