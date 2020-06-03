import { Component, OnInit } from '@angular/core';
import { Livro } from '../model/livro.model';
import { ListaService } from '../service/lista.service';
import { DataService } from '../service/data.service'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public livros: Livro[]

  constructor(private listaService: ListaService, private data: DataService) {
    this.data.currentMessage.subscribe((livros) => this.livros = livros);
    console.log(this.livros);
  }

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.livros = this.data.listaLivro
    console.log(this.livros)
  }

  alugar(id) {
    this.listaService.alugar(id)
  }

}
