import { Component } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  listaLivros: [];
  campoBusca: string = ''

  constructor(private servive: LivroService) { }

  findBooks() {
    this.servive.find(this.campoBusca).subscribe((res) => {
      console.log(res)
    })
  }
}



