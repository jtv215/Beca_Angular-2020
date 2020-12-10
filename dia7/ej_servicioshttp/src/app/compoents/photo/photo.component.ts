import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/servicio/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
 
  photo:Photo;
  alert=false;
  texto:string;

  constructor( private _router: Router,
    private _route: ActivatedRoute,
    private _photoService: PhotoService,) { 
      this.texto='Some quick example text to build on the card title and make up the bulk of the cards content.'
      this.photo = new Photo(0,0,"","","");
    }

  ngOnInit(): void {    
    this.getPhoto();
  }

  getPhoto() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._photoService.getphoto(id).subscribe(
        response => {
          this.photo= response;
          //console.log(response);         
        },
        error => {
          var errMenssage = <any>error;         
            console.log(error);
          }
       
      );
    });
  }

  deletePhoto(id) {
    console.log(id);
    this._photoService.deletePhoto(id).subscribe(
      response => {
        this.alert=true;  
        this.photo=response;     
        this.texto='';
      },
      error => {        
        console.log(error);
      }
    )
  }

  irAtras(){ 
    this._router.navigate(['/']);
  }

}
