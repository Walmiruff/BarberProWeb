import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { IArray } from './precos';

@Injectable({
  providedIn: 'root'
})
export class PrecosService {
  private readonly API = `${environment.API}precos`;
  private PATH = 'precos/';

  constructor(
    private httpclient: HttpClient,
    private http: Http,
    private router: Router,
    private db: AngularFireDatabase
  ) { }


  postPrecos(formulario: FormGroup) {
    return new Promise((resolve) => {
      this.db.object(this.PATH + formulario.get('fk').value)
        .set({ array: [formulario.value] })
        .then(() => resolve());
    });

    /*
        const body = JSON.stringify(formulario.value);
        const headerOptions = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post(this.API, body, requestOptions).pipe(map(x => x.json()));*/
  }


  putPrecos(formulario: FormGroup) {

    return new Promise((resolve, reject) => {
      this.db.object(this.PATH + formulario.get('fk').value)
        .update({ array: [formulario.value] })
        .then(() => resolve())
        .catch((e) => reject(e));
    });

    /* const body = JSON.stringify(formulario.value);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(this.API + '/' + id, body, requestOptions).pipe(map(x => x.json()));*/
  }




  /*
    buscarPorCodigoPreco(codigo: number): Promise<IPrecos>  {
    //  return this.db.list<IArray[]>(this.PATH + codigo + '/array')
      return this.http.get(`${this.API}?fk=${codigo}`)
        .toPromise()
        .then(response => {
          const dados = response.json() as IPrecos;
          console.log(dados);
          return dados;
        });
    }
  */

  getListaPrecos(codigo: string) {
    try {

      return this.db.object<IArray[]>(this.PATH + codigo + '/array').valueChanges();

      //  return this.httpclient.get<IPrecos[]>(`${this.API}?fk=${codigo}`);
    } catch {
    }
  }

  getListaPrecos2(codigo: string) {
    try {

      return this.db.object<any[]>(this.PATH + codigo + '/array').valueChanges();

      //  return this.httpclient.get<IPrecos[]>(`${this.API}?fk=${codigo}`);
    } catch {
    }
  }

}
