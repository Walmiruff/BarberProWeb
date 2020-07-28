import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, RequestMethod, Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { User } from './user.model';
import { ILocalizar } from './localizar.model';





@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = `${environment.API}userconfig`;
  private PATH = 'userconfig/';
  private readonly Keybing = 'Am06s4u9v3iDlgSdztJsrlkC-fFQg8LlFcSfqNc5hFxodfxnxqApuwEqKVH5vp-i';



  constructor(
    private httpclient: HttpClient,
    private http: Http,
    private router: Router,
    private db: AngularFireDatabase
  ) {
  }


  postUsuario(formulario: FormGroup) {

    return new Promise((resolve) => {

      this.db.object(this.PATH + formulario.get('fk').value)
        .set({
          fk: formulario.get('fk').value,
          id: formulario.get('id').value,
          lat: formulario.get('lat').value,
          long: formulario.get('long').value,
          txt_NomeSalao: formulario.get('txt_NomeSalao').value,
          txt_NomeResp: formulario.get('txt_NomeResp').value,

          txt_pais: formulario.get('txt_pais').value,
          txt_End: formulario.get('txt_End').value,
          txt_CEP: formulario.get('txt_CEP').value,
          txt_Cidade: formulario.get('txt_Cidade').value,
          txt_UF: formulario.get('txt_UF').value,
          txt_Numero: formulario.get('txt_Numero').value,

          txt_Cel: formulario.get('txt_Cel').value,
          txt_Tel: formulario.get('txt_Tel').value,
          txt_email: formulario.get('txt_email').value,
          url: formulario.get('url').value,
          urlLogo: formulario.get('urlLogo').value
        })
        .then(() => resolve());
    });
    /*
    const body = JSON.stringify(formulario.value);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.API, body, requestOptions).pipe(map(x => x.json())); */
  }



  putUsuario(formulario: FormGroup) {
    return new Promise((resolve, reject) => {

      this.db.object(this.PATH + formulario.get('fk').value)
        .update({
          lat: formulario.get('lat').value,
          long: formulario.get('long').value,
          txt_NomeSalao: formulario.get('txt_NomeSalao').value,
          txt_NomeResp: formulario.get('txt_NomeResp').value,

          txt_pais: formulario.get('txt_pais').value,
          txt_End: formulario.get('txt_End').value,
          txt_CEP: formulario.get('txt_CEP').value,
          txt_Cidade: formulario.get('txt_Cidade').value,
          txt_UF: formulario.get('txt_UF').value,
          txt_Numero: formulario.get('txt_Numero').value,

          txt_Cel: formulario.get('txt_Cel').value,
          txt_Tel: formulario.get('txt_Tel').value,
          txt_email: formulario.get('txt_email').value,
          url: formulario.get('url').value,
          urlLogo: formulario.get('urlLogo').value
        })
        .then(() => resolve())
        .catch((e) => reject(e));
    });

    /*
    const body = JSON.stringify(formulario.value);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(this.API + '/' + id, body, requestOptions).pipe(map(x => x.json())); */
  }


  buscarPorCodigo(key: string) {

    // this.db.object<CalendarEvent[]>(this.PATH + codigo).valueChanges().subscribe(console.log);
    return this.db.object<User[]>(this.PATH + key).valueChanges();
  }


/*
  buscarPorCodigo(codigo: number): Promise<User> {
    return this.http.get(`${this.API}/${codigo}`)
      .toPromise()
      .then(response => {
        const usuario = response.json() as User;
        return usuario;
      });
  }
*/



putImage(url1: string, formulario: FormGroup) {
  return new Promise((resolve, reject) => {

    this.db.object(this.PATH + formulario.get('fk').value)
      .update({
        lat: formulario.get('lat').value,
        long: formulario.get('long').value,
        txt_NomeSalao: formulario.get('txt_NomeSalao').value,
        txt_NomeResp: formulario.get('txt_NomeResp').value,

        txt_pais: formulario.get('txt_pais').value,
        txt_End: formulario.get('txt_End').value,
        txt_CEP: formulario.get('txt_CEP').value,
        txt_Cidade: formulario.get('txt_Cidade').value,
        txt_UF: formulario.get('txt_UF').value,
        txt_Numero: formulario.get('txt_Numero').value,

        txt_Cel: formulario.get('txt_Cel').value,
        txt_Tel: formulario.get('txt_Tel').value,
        txt_email: formulario.get('txt_email').value,
        url: url1,
        urlLogo: formulario.get('urlLogo').value
      })
      .then(() => resolve())
      .catch((e) => reject(e));
  });

}


putImageLogo(url1: string, formulario: FormGroup) {
  return new Promise((resolve, reject) => {

    this.db.object(this.PATH + formulario.get('fk').value)
      .update({
        lat: formulario.get('lat').value,
        long: formulario.get('long').value,
        txt_NomeSalao: formulario.get('txt_NomeSalao').value,
        txt_NomeResp: formulario.get('txt_NomeResp').value,

        txt_pais: formulario.get('txt_pais').value,
        txt_End: formulario.get('txt_End').value,
        txt_CEP: formulario.get('txt_CEP').value,
        txt_Cidade: formulario.get('txt_Cidade').value,
        txt_UF: formulario.get('txt_UF').value,
        txt_Numero: formulario.get('txt_Numero').value,

        txt_Cel: formulario.get('txt_Cel').value,
        txt_Tel: formulario.get('txt_Tel').value,
        txt_email: formulario.get('txt_email').value,
        url: formulario.get('url').value,
        urlLogo:  url1
      })
      .then(() => resolve())
      .catch((e) => reject(e));
  });

}



  getListaLocalizacao(formulario: FormGroup): Promise<ILocalizar> {

    return this.http.get(
      'https://dev.virtualearth.net/REST/v1/Locations/' +
      `${(formulario.get('txt_pais').value).trim()}/` +
      `${(formulario.get('txt_UF').value).trim()}/` +
      `${(formulario.get('txt_CEP').value).trim()}/` +
      `${(formulario.get('txt_Cidade').value).trim()}/` +
      `${(formulario.get('txt_NomeResp').value).trim()}/` +
      `${(formulario.get('txt_End').value).trim()}/` +
      `${(formulario.get('txt_Numero').value).trim()}/` +
      '1%20Microsoft%20Way?o=json&key=' +
      this.Keybing
    )
      .toPromise()
      .then(response => {
        const dados = response.json() as ILocalizar;
        return dados;
      });
  }


  getPaises() {
    return this.http.get('assets/dados/paises.json')
      .pipe(map((res: Response) => res.json()));
  }


  delUser (user: string) {
    return this.db.object(this.PATH + user ).remove();
  }


  atualizarOneSignal (user: string, oneSignal: string) {
    return this.db.object(`/precos/${user}/array/0`).update({ userIdOneSignalSalao: oneSignal});
  }
}
