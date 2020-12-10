import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/';
  }

  getphotos() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
    return this._http.get<Photo[]>(this.url + 'photos', httpOptions);
  }

  getphoto(id) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
    return this._http.get<Photo>(this.url + 'photos/' + id, httpOptions);

  }

  deletePhoto(id) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
    return this._http.delete<Photo>(this.url + 'photos/' + id, httpOptions);

  }

  updatePhoto(id, data): Observable<any> {
    let params = JSON.stringify(data);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };

    return this._http.put(this.url + 'photos/' + id, params, httpOptions);
  }


}
