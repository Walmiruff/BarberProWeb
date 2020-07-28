import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, debounceTime } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/shared/service/usuario/usuario.model';





@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {
  private readonly API = `${environment.API}usuarios`;

  constructor(private httpclient: HttpClient) { }






 verificarEmail(email: string) {
  return this.httpclient.get<Usuario[]>(this.API)
  // return this.httpclient.get('db.json')
     .pipe(
      debounceTime(2000),
    //    map((dados: { usuarios: any[] }) => dados.usuarios),
      //  tap(console.log)
      map((dados: { email: string }[]) => dados.filter(v => v.email === email)),
      // tap(console.log),
      map((dados: any[]) => dados.length > 0) // retornar true ou false no email digitado no form
      // tap(console.log),
      );


  }




}
