import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  libros: Libro[];
  numLibros: number;

  constructor(private librosService: LibrosService) {
    this.librosService.getAll().subscribe((data) => this.libros = data); // con observables
    
    // .then(posts => { this.libros = posts;                             // con promesas
    //                  this.numLibros = this.libros.length;
    //                  return this.libros;
    //  }) or
    // .then(posts => this.libros = posts)
    // .then( () => this.numLibros = this.libros.length)
    // .catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.librosService.getAll().subscribe((data) => this.libros = data); // con observables
    this.numLibros = this.libros.length;
    this.numLibros = this.librosService.countLibros();
    console.log('En header, numLibros: ', this.numLibros);
  }
}
