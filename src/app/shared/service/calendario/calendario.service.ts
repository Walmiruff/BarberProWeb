import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, RequestMethod, Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Request } from 'selenium-webdriver/http';



@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  private readonly API = `${environment.API}calendario`;
  private PATH = 'calendario/';
  private PATH2 = 'onesignal/';
  title: string;
  dataVazio: any;

  constructor(
    private httpclient: HttpClient,
    private http: Http,
    private db: AngularFireDatabase
  ) {
    this.dataVazio = {
      contents: { en: 'msgVazia' },
      include_player_ids: '',
    };
   }


  getListaCalendario(key: string) {

    // this.db.object<CalendarEvent[]>(this.PATH + codigo).valueChanges().subscribe(console.log);
    return this.db.list(this.PATH + key)
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val(),
          title: c.payload.key, ...c.payload.val(),
          userId: c.payload.key, ...c.payload.val(),
          start: c.payload.key, ...c.payload.val(),
          end: c.payload.key, ...c.payload.val()
        }));
      }));
    // return this.httpclient.get<CalendarEvent[]>(`${this.API}?fk=${codigo}`);

  }




  post(calendario: FormGroup) {

    return new Promise((resolve) => {
      this.db.list(this.PATH + calendario.get('fk').value)
        .push({
          start: (calendario.get('start').value).toString(),
          end: (calendario.get('end').value).toString(),
          title: calendario.get('title').value,
          userId: calendario.get('userId').value,
          color: {
            primary: '#1e90ff',
            secondary: '#D1E8FF'
          },
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
          draggable: true
        })
        .then((result: any) => resolve(result.key));
    });


    /*
    const body = JSON.stringify(calendario.value);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(this.API, body, requestOptions).pipe(map(x => x.json()));*/
  }


  sendNotification(uid, data) {
    return new Promise((resolve) => {
      this.db.object(this.PATH2 + uid)
        .update({ data: data })
        .then(() => resolve(
          this.db.object(this.PATH2 + uid).update({data: this.dataVazio})));
    });
  }


  put(calendario: FormGroup, id: string) {

    return  new Promise((resolve, reject) => {
        this.db.object(this.PATH + calendario.get('fk').value + '/' + id)
        .update({
          start: (calendario.get('start').value).toString(),
          end: (calendario.get('end').value).toString(),
          title: calendario.get('title').value,
          userId: calendario.get('userId').value,
          color: {
            primary: '#1e90ff',
            secondary: '#D1E8FF'
          },
          resizable: {
            beforeStart: true,
            afterEnd: true,
          },
          draggable: true
        })
        .then(() => resolve())
        .catch((e) => reject(e));
    });


    /*
    const body = JSON.stringify(calendario.value);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(this.API + '/' + id, body, requestOptions).pipe(map(x => x.json()));*/
  }



  deleteCliente(key: string, codigo: string) {
    return this.db.list(this.PATH + codigo).remove(key);
    // return this.http.delete(this.API + '/' + id).pipe(map(res => res.json()));
  }

}


