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

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    this.librosService.getAll().subscribe((data) => { this.libros = data;
                                                      this.numLibros = this.librosService.countLibros()}); // con observables
  }
}
