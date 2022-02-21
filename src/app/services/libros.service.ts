import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  libros: Libro[];
  baseURL = 'assets/libros.json';
  numLibros: number = 0;

  constructor(private http: HttpClient) {
    this.loadLibros();
    console.log('Servicio, array de libros generado');
  }

  getAll(): Observable<Libro[]> {
    return this.http
    .get<Libro[]>(this.baseURL,
    {observe: 'body', responseType: 'json'}); //.toPromise();
  }

  loadLibros():void {
    this.getAll()
    .subscribe((data) => {this.libros = data;
                          this.numLibros= data.length;
                        console.log('Observable: ',this.numLibros);});
  }

  countLibros(): number {
    this.numLibros = this.libros.length;
    console.log('Servicio, número de libros: ' + this.libros.length);
    return this.numLibros;
  } 

  getLibro(pLibroId: number): Libro {
    return this.libros[pLibroId];
  }

  create(libroNuevo: Libro): void {
    this.libros.push(libroNuevo);
  }

  getOrdered(criterio: string): Libro[] {
    if (criterio === 'autor') {
      this.libros.sort((a: Libro, b: Libro) => {
        if (a.autor > b.autor) {
          return 1;
        }
        if (a.autor < b.autor) {
          return -1;
        }
        return 0;
      });
    } else if (criterio === 'titulo') {
      this.libros.sort((a: Libro, b: Libro) => {
        if (a.titulo > b.titulo) {
          return 1;
        }
        if (a.titulo < b.titulo) {
          return -1;
        }
        return 0;
      });
    } else if (criterio === 'desordenado') {
      this.libros.sort((a: Libro, b: Libro) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    }
    return this.libros;
  }
}
