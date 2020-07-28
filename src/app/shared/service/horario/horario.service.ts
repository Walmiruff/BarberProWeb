import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

import { HorarioDom } from './HorarioDom';
import { HorarioSeg } from './HorarioSeg';
import { HorarioTer } from './HorarioTer';
import { HorarioQua } from './HorarioQua';
import { HorarioQui } from './HorarioQui';
import { HorarioSex } from './HorarioSex';
import { HorarioSab } from './HorarioSab';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private readonly APIdom = `${environment.API}tb_horariodom`;
  private readonly APIseg = `${environment.API}tb_horarioseg`;
  private readonly APIter = `${environment.API}tb_horarioter`;
  private readonly APIqua = `${environment.API}tb_horarioqua`;
  private readonly APIqui = `${environment.API}tb_horarioqui`;
  private readonly APIsex = `${environment.API}tb_horariosex`;
  private readonly APIsab = `${environment.API}tb_horariosab`;


  private PATHdom = 'tb_horariodom/';
  private PATHseg = 'tb_horarioseg/';
  private PATHter = 'tb_horarioter/';
  private PATHqua = 'tb_horarioqua/';
  private PATHqui = 'tb_horarioqui/';
  private PATHsex = 'tb_horariosex/';
  private PATHsab = 'tb_horariosab/';

  constructor(
    private httpclient: HttpClient,
    private http: Http,
    private db: AngularFireDatabase
    ) { }



    getListaHorarioDom(codigo: string) {
      try {

        return this.db.object<HorarioDom[]>(this.PATHdom + codigo + '/array').valueChanges();

      } catch {
      }
    }
/*
  getListaHorarioDom(codigo: number) {
    try {
      return this.httpclient.get<HorarioDom[]>(`${this.APIdom}?fk=${codigo}`);
    } catch {
    }
  }
*/

  getListaHorarioSeg(codigo: string) {
    try {
      return this.db.object<HorarioSeg[]>(this.PATHseg + codigo + '/array').valueChanges();
    } catch {
    }
  }


  getListaHorarioTer(codigo: string) {
    try {
      return this.db.object<HorarioTer[]>(this.PATHter + codigo + '/array').valueChanges();
    } catch {
    }
  }

  getListaHorarioQua(codigo: string) {
    try {
      return this.db.object<HorarioQua[]>(this.PATHqua + codigo + '/array').valueChanges();
    } catch {
    }
  }

  getListaHorarioQui(codigo: string) {
    try {
      return this.db.object<HorarioQui[]>(this.PATHqui + codigo + '/array').valueChanges();
    } catch {
    }
  }


  getListaHorarioSex(codigo: string) {
    try {
      return this.db.object<HorarioSex[]>(this.PATHsex + codigo + '/array').valueChanges();
    } catch {
    }
  }


  getListaHorarioSab(codigo: string) {
    try {
      return this.db.object<HorarioSab[]>(this.PATHsab + codigo + '/array').valueChanges();
    } catch {
    }
  }



  postHorarioDom(formulario: FormGroup) {

    return new Promise((resolve) => {
      this.db.object(this.PATHdom + formulario.get('fk').value)
        .set({ array: [formulario.value] })
        .then(() => resolve());
    });


  /*  const body = JSON.stringify(formulario.value);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.APIdom, body, requestOptions).pipe(map(x => x.json()));*/
  }

  postHorarioSeg(formulario: FormGroup) {

    return new Promise((resolve) => {
      this.db.object(this.PATHseg + formulario.get('fk').value)
        .set({ array: [formulario.value] })
        .then(() => resolve());
    });
  }


  postHorarioTer(formulario: FormGroup) {
    return new Promise((resolve) => {
      this.db.object(this.PATHter + formulario.get('fk').value)
        .set({ array: [formulario.value] })
        .then(() => resolve());
    });
  }


  postHorarioQua(formulario: FormGroup) {

    return new Promise((resolve) => {
      this.db.object(this.PATHqua + formulario.get('fk').value)
        .set({ array: [formulario.value] })
        .then(() => resolve());
    });
  }



  postHorarioQui(formulario: FormGroup) {
    return new Promise((resolve) => {
      this.db.object(this.PATHqui + formulario.get('fk').value)
        .set({ array: [formulario.value] })
        .then(() => resolve());
    });
  }


  postHorarioSex(formulario: FormGroup) {

    return new Promise((resolve) => {
      this.db.object(this.PATHsex + formulario.get('fk').value)
        .set({ array: [formulario.value] })
        .then(() => resolve());
    });
  }



  postHorarioSab(formulario: FormGroup) {

    return new Promise((resolve) => {
      this.db.object(this.PATHsab + formulario.get('fk').value)
        .set({ array: [formulario.value] })
        .then(() => resolve());
    });
  }




  putHorarioDom(formulario: FormGroup, id: string) {

    return new Promise((resolve, reject) => {
      this.db.object(this.PATHdom + id)
        .update({ array: [formulario.value] })
        .then(() => resolve())
        .catch((e) => reject(e));
    });
  }
/*
  putHorarioDom(formulario: FormGroup, id: number) {

    const body = JSON.stringify(formulario.value);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(this.APIdom + '/' + id, body, requestOptions).pipe(map(x => x.json()));
  }*/


  putHorarioSeg(formulario: FormGroup, id: string) {

    return new Promise((resolve, reject) => {
      this.db.object(this.PATHseg + id)
        .update({ array: [formulario.value] })
        .then(() => resolve())
        .catch((e) => reject(e));
    });
  }


  putHorarioTer(formulario: FormGroup, id: string) {

    return new Promise((resolve, reject) => {
      this.db.object(this.PATHter + id)
        .update({ array: [formulario.value] })
        .then(() => resolve())
        .catch((e) => reject(e));
    });
  }


  putHorarioQua(formulario: FormGroup, id: string) {

    return new Promise((resolve, reject) => {
      this.db.object(this.PATHqua + id)
        .update({ array: [formulario.value] })
        .then(() => resolve())
        .catch((e) => reject(e));
    });
  }


  putHorarioQui(formulario: FormGroup, id: string) {

    return new Promise((resolve, reject) => {
      this.db.object(this.PATHqui + id)
        .update({ array: [formulario.value] })
        .then(() => resolve())
        .catch((e) => reject(e));
    });
  }



  putHorarioSex(formulario: FormGroup, id: string) {

    return new Promise((resolve, reject) => {
      this.db.object(this.PATHsex + id)
        .update({ array: [formulario.value] })
        .then(() => resolve())
        .catch((e) => reject(e));
    });
  }



  putHorarioSab(formulario: FormGroup, id: string) {

    return new Promise((resolve, reject) => {
      this.db.object(this.PATHsab + id)
        .update({ array: [formulario.value] })
        .then(() => resolve())
        .catch((e) => reject(e));
    });
  }



  buscarPorCodigoDom(codigo: string) {
    try {

      return this.db.object<any[]>(this.PATHdom + codigo + '/array').valueChanges();

    } catch {
    }
  }
/*
  buscarPorCodigoDom(codigo: number): Promise<HorarioDom> {
    return this.http.get(`${this.APIdom}?fk=${codigo}`)
      .toPromise()
      .then(response => {
        const dados = response.json() as HorarioDom;
        return dados;
      });
  }*/


  buscarPorCodigoSeg(codigo: string) {
    try {

      return this.db.object<any[]>(this.PATHseg + codigo + '/array').valueChanges();

    } catch {
    }
  }



  buscarPorCodigoTer(codigo: string) {
    try {

      return this.db.object<any[]>(this.PATHter + codigo + '/array').valueChanges();

    } catch {
    }
  }



  buscarPorCodigoQua(codigo: string) {
    try {

      return this.db.object<any[]>(this.PATHqua + codigo + '/array').valueChanges();

    } catch {
    }
  }


  buscarPorCodigoQui(codigo: string) {
    try {

      return this.db.object<any[]>(this.PATHqui + codigo + '/array').valueChanges();

    } catch {
    }
  }


  buscarPorCodigoSex(codigo: string) {
    try {

      return this.db.object<any[]>(this.PATHsex + codigo + '/array').valueChanges();

    } catch {
    }
  }



  buscarPorCodigoSab(codigo: string) {
    try {

      return this.db.object<any[]>(this.PATHsab + codigo + '/array').valueChanges();

    } catch {
    }
  }





}
