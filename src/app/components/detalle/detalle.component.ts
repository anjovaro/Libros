import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  indice: number;
  libro: Libro;

  constructor(private activatedRoute: ActivatedRoute, private librosService: LibrosService ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('Parámetro libroId: ' + params.libroId);
      // tslint:disable-next-line: radix
      this.indice = parseInt(params.libroId);
      this.libro = this.librosService.getLibro(this.indice);
      console.log("libro en detalle: ", this.libro);
    });
  }

}
