import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';







@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private readonly API = `${environment.API}`;

  constructor(private httpClient: HttpClient) { }


  fazerLogin(formLogin: FormGroup) {
    return ;
  }




}
