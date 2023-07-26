import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoria',
})
export class AutoriaPipe implements PipeTransform {
  transform(autoria: string[]): string {
    if (autoria.length > 1) {
      return `${autoria[0]} e ${autoria[1]}`;
    }

    if (autoria) {
      return autoria[0];
    }

    return '';
  }
}
