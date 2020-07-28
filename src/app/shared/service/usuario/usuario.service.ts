import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, RequestMethod, Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';


import { Usuario } from './usuario.model';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.API}usuarios`;
  private PATH = 'emails/';


  constructor(
    private httpclient: HttpClient,
    private http: Http,
    private router: Router,
    private db: AngularFireDatabase
  ) {

  }

  getListaUsuarios() {

    //  this.db.object<Usuario[]>(this.PATH).valueChanges().subscribe(console.log);
    //  this.httpclient.get<Usuario[]>(this.API).subscribe(console.log);

    return this.httpclient.get<Usuario[]>(this.API);

  }



  postEmail(email: FormGroup) {
    return new Promise((resolve) => {
      this.db.list(this.PATH)
        .push({
          a_email: (email.get('yourEmail').value).toString(),
          b_nome: (email.get('yourName').value).toString(),
          c_assunto: (email.get('assunto').value).toString(),
          d_message: (email.get('message').value).toString(),
        });
    });
  }


  /*
    postUsuario(formulario: FormGroup) {
      const body = JSON.stringify(formulario.value);
      const headerOptions = new Headers({ 'Content-Type': 'application/json' });
      const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
      return this.http.post(this.API, body, requestOptions).pipe(map(x => x.json()));
    }*/


}
