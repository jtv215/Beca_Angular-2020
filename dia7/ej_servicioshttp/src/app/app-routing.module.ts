import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarPhotoComponent } from './compoents/editar-photo/editar-photo.component';
import { ListadoPhotoComponent } from './compoents/listado-photo/listado-photo.component';
import { PhotoComponent } from './compoents/photo/photo.component';

const routes: Routes = [
  { path: '', component: ListadoPhotoComponent },
  { path: 'listaphoto', component: ListadoPhotoComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: 'editar/:id', component: EditarPhotoComponent },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
