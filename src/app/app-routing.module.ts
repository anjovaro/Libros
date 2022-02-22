import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { DetalleComponent } from './components/detalle/detalle.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contenido' }, // valor por defecto
  { path: 'contenido', component: ContenidoComponent },
  { path: 'detalle/:libroId', component: DetalleComponent },
  { path: '**', redirectTo: 'contenido' } // siempre a la lista de libros
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
