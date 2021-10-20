import { Component, OnInit, PipeTransform } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';
import { PipeTransformPipe } from '../../pipes/pipe-transform.pipe';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent implements OnInit {

  libros: Libro[];
  orden: string;
  filtro: string;

  constructor(private librosService: LibrosService) {
    this.orden = '';
    this.filtro = '';
  }

  ngOnInit(): void {
    this.librosService.getAll()
    .then(posts => this.libros = posts)
    .catch(error => console.log(error));
  }

  onChange($event): void {
    console.log('Ordenar por ' + $event.target.value);
    this.libros = this.librosService.getOrdered($event.target.value);
  }
}
