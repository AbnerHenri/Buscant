import { Component, OnDestroy } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { Item, Livro } from 'src/app/models/intefaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnDestroy {
  listaLivros: any;
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

  resultBooks(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
