import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Livro, VolumeInfo } from 'src/app/models/intefaces';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnDestroy {
  listaLivros: Livro[];
  campoBusca: string = '';
  subscription: Subscription;
  livro: Livro;

  constructor(private service: LivroService) {}

  findBooks() {
    this.subscription = this.service.find(this.campoBusca).subscribe({
      next: (items) => {
        this.listaLivros = this.resultBooks(items);
        console.log(items);
      },
      error: (err) => console.log(err),
    });
  }

  resultBooks(items): Livro[] {
    const livros: Livro[] = [];

    items.forEach((e) => {
      livros.push(
        (this.livro = {
          title: e.volumeInfo?.title,
          authors: e.volumeInfo?.authors,
          publisher: e.volumeInfo?.publisher,
          publishedDate: e.volumeInfo?.publishedDate,
          description: e.volumeInfo?.description,
          previewLink: e.volumeInfo?.previewLink,
          thumbnail: e.volumeInfo?.imageLinks?.thumbnail,
        })
      );
    });

    return livros;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
