import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';


import { Usuario } from '../shared/service/usuario/usuario.model';
import { UsuarioService } from '../shared/service/usuario/usuario.service';
import { UserService } from '../shared/service/user/user.service';
import { AuthService } from '../shared/service/auth/auth.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  mostraRedefinirSenha: boolean;


  usuarios$: Observable<Usuario[]>;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private userService: UserService,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
   }


  ngOnInit() {


    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });

    this.mostraRedefinirSenha = true;

  }





  onSubmit() {
    if (this.formulario.valid) {

      this.authService.signIn(this.formulario)
      .then(() => {
        this.router.navigate(['menu']);
      })
      .catch((error: any) => {
        this.mostraRedefinirSenha = false;
      });
  } else {
    this.verificaValidacoesForm(this.formulario);
  }
  }



  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      // console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsUntouched();

      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }


















}
