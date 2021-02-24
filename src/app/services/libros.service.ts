import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// mport * as data from '../assets/libros.json';
import { Libro } from '../models/libro.model';
import { LIBROS } from '../data/libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: Libro[];

  constructor() {
    this.libros = LIBROS;
  }

  // getLibros(): Observable<Array<Libro>> {
  //   // return (data as any).Libro;
  // }

  getAll(): Libro[] {
    return this.libros;
  }

  getLibro(pLibroId: number): Libro {
    return this.libros[pLibroId - 1];
  }

  create(libroNuevo: Libro): void {
    this.libros.push(libroNuevo);
  }

  orden(a: any, b: any): number{
    if (a.titulo > b.titulo) {
      return 1;
    }
    if (a.titulo < b.titulo) {
      return -1;
    }
    return 0;
  }
  getOrdered(criterio: string): Libro[]{
    if (criterio === 'autor'){
      this.libros.sort((a: any, b: any) => {
        if (a.autor > b.autor) {
          return 1;
        }
        if (a.autor < b.autor) {
          return -1;
        }
        return 0;
      });
    } else if (criterio === 'titulo'){
      this.libros.sort((a: any, b: any) => {
        if (a.titulo > b.titulo) {
          return 1;
        }
        if (a.titulo < b.titulo) {
          return -1;
        }
        return 0;
        });
    } else if (criterio === 'desordenado'){
        this.libros = LIBROS;
    }
    return this.libros;
  }
}

  // filtrado(): Promise<Libro[]> {
  //   const prom = new Promise<Libro[]>((resolve, reject) => {
  //     const arrTemp: Libro[] = [];
  //     for (const libro of this.libros) {
  //       if (libro.titulo === 'I robot') {
  //         arrTemp.push(libro);
  //       }
  //     }
  //     resolve(arrTemp);
  //   });
  //   return prom;
  // }

  // filtradoV2(): Promise<Libro[]> {
  //   return new Promise((resolve, reject) => {
  //     resolve(this.libros.filter(libro => libro.titulo === 'I robot'));
  //   });
  // }

