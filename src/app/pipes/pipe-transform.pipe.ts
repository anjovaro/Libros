import { Pipe, PipeTransform } from '@angular/core';
import { Libro } from '../models/libro.model';

@Pipe({
  name: 'pipeTransform'
})
export class PipeTransformPipe implements PipeTransform {

  transform(value: Libro[], input: string): Libro[] {
    if (input) {
      return value.filter(val => val.titulo.indexOf(input) >= 0);
    } else {
      return value;
    }
  }
}
