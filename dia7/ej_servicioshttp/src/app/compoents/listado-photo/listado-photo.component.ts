import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/servicio/photo.service';
@Component({
  selector: 'app-listado-photo',
  templateUrl: './listado-photo.component.html',
  styleUrls: ['./listado-photo.component.css']
})
export class ListadoPhotoComponent implements OnInit {

  public photos: Photo[];
  constructor(
    private _photoService: PhotoService,
    private _router: Router,) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this._photoService.getphotos().subscribe(
      response => {
        this.photos = response;       
      },
      error => {        
        console.log(error);
      }
    )
  }


}
