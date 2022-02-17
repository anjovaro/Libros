export class Libro {
  id: string;
  titulo: string;
  autor: string;
  editorial: string;
  descripcion: string;
  img: string;

  constructor(pId: string, pTitulo: string, pAutor: string, pEditorial: string, pDescripcion: string, pImg: string){
    this.id = pId;
    this.titulo = pTitulo;
    this.autor = pAutor;
    this.editorial = pEditorial;
    this.descripcion = pDescripcion;
    this.img = pImg;
  }
}