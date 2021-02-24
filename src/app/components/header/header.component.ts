import { HttpClient } from '@angular/common/http';
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

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.libros = this.librosService.getAll();
    /*   HttpClient.get('./assest/libros.json',)
        .subscribe(data => {   // data is already a JSON object
          console.log(data['titulo']);
        }); */
    // $http.get('libros.json')
    //     .then(function(res) {
    //         $scope.libros = res.data;
    //     });
  }

}
// $http.get('libros.json')
//         .then(function(res) {
//             $scope.libros = res.data;
//         });
//     // elegir el criterio de ordenación
//     $scope.ordenarPor = function(x) {
//         $scope.orden = x;
//     };
    // $scope.paramValue = $routeParams.id
