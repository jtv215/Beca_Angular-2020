import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private  httpclient:HttpClient) { }

/*   listarUsuarios():Observable<any>{
    return this.httpclient.get("https://jsonplaceholder.typeicode.com/users");
  }

  eliminarUsuarios(id_usuario):Observable<any>{
    return this.httpclient.get("https://jsonplaceholder.typeicode.com/users"+id_usuario);
  } */
  

}
