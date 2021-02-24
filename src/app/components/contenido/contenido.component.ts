import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';

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
    this.libros = this.librosService.getAll();
  }

  ngOnInit(): void {
    console.log(this.libros);
  }

  // async onClick(): Promise<any> {
  //   /*this.librosService.filtrado()
  //     .then((arrTempLibros) => console.log(arrTempLibros))
  //    // .then((arrTempLibros) => this.libros = arrTempLibros)
  //     .catch(error => console.log(error)); */
  //   try {
  //     this.libros = await this.librosService.filtradoV2();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  onChange($event): void {
    console.log('Ordenar por ' + $event.target.value);
    this.libros = this.librosService.getOrdered($event.target.value);
  }
}
