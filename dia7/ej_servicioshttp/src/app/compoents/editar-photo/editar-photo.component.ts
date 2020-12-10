import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/servicio/photo.service';

@Component({
  selector: 'app-editar-photo',
  templateUrl: './editar-photo.component.html',
  styleUrls: ['./editar-photo.component.css']
})
export class EditarPhotoComponent implements OnInit {

  photo: Photo;
  alert: boolean;
  message: string;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _photoService: PhotoService,) {
    this.photo = new Photo(0,0,"","","");
    this.alert = false;
  }

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._photoService.getphoto(id).subscribe(
        response => {
          this.photo = response;
        },
        error => {
          var errMenssage = <any>error;
          console.log(error);
        }

      );
    });
  }

  btnEditarfoto() {
    this._photoService.updatePhoto(this.photo.id, this.photo).subscribe(
      response => {
        this.alert = true;
        this.message = response;   
      },
      error => {
        console.log(error);
      }

    );
  }

  irAtras(){ 
    this._router.navigate(['/']);
  }
}
