import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTransform'
})
export class PipeTransformPipe implements PipeTransform {

  // transform(value: any[], filter: any): any {
  //   return null;
  // }

  transform(value: any[], input: any): any[] {
    if (input) {
      return value.filter(val => val.titulo.indexOf(input) >= 0);
    } else {
      return value;
    }
  }
}
