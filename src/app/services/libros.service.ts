import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  libros: Libro[];
  baseURL = 'assets/libros.json';

  constructor(private httpClient: HttpClient) {
    this.getAll()
      .then((posts) => (this.libros = posts))
      .catch((error) => console.log(error));
    console.log('array de libros generado en el servicio');
  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseURL).toPromise();
  }

  countLibros(): number {
    console.log('Servicio: número de libros ' + this.libros.length);
    return this.libros.length;
  }

  /*  getAll(): Libro[] {
    return this.libros;
  } */

  getLibro(pLibroId: number): Libro {
    return this.libros[pLibroId];
  }

  create(libroNuevo: Libro): void {
    this.libros.push(libroNuevo);
  }

  getOrdered(criterio: string): Libro[] {
    if (criterio === 'autor') {
      this.libros.sort((a: any, b: any) => {
        if (a.autor > b.autor) {
          return 1;
        }
        if (a.autor < b.autor) {
          return -1;
        }
        return 0;
      });
    } else if (criterio === 'titulo') {
      this.libros.sort((a: any, b: any) => {
        if (a.titulo > b.titulo) {
          return 1;
        }
        if (a.titulo < b.titulo) {
          return -1;
        }
        return 0;
      });
    } else if (criterio === 'desordenado') {
      this.libros.sort((a: any, b: any) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
      /* this.getAll()
      .then(posts => this.libros = posts)
      .catch(error => console.log(error)); */
    }
    return this.libros;
  }
}
