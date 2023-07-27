import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map, switchMap, tap } from 'rxjs';
import { Item, Livro } from 'src/app/models/intefaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  campoBusca = new FormControl();

  constructor(private service: LivroService) {}

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    filter((valorDigitado) => valorDigitado.length >= 3),
    switchMap((valorDigitado) => this.service.find(valorDigitado)),
    map((items) => this.resultBooks(items)),
    tap((res) => console.log(res))
  );

  resultBooks(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }
}
