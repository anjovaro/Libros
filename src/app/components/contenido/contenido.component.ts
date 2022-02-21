import { Component, OnInit, PipeTransform } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';
//import { PipeTransformPipe } from 'src/app/pipes/pipe-transform.pipe';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent implements OnInit {

  libros: Libro[] = [];
  orden: string = '';
  filtro: string = '';
  estilo = 'width:110px;padding-right:10px';

  constructor(private librosService: LibrosService) {
  }

  ngOnInit(): void {
    this.librosService.getAll().subscribe((data:Libro[]) => this.libros = data);
    // console.log('Contenido Component Libros: ', this.libros);
    // .then(posts => this.libros = posts)  // usando promesas
    // .catch(error => console.log(error));
  }

  onChange($event): void {
    console.log('Ordenar por ' + $event.target.value);
    this.libros = this.librosService.getOrdered($event.target.value);
  }
}
