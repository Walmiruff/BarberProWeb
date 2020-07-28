import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { TranslateService } from '@ngx-translate/core';

import { UsuarioService } from '../shared/service/usuario/usuario.service';
import { AuthService } from '../shared/service/auth/auth.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  formulario: FormGroup;
  browserLg: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
    this.browserLg = browserLang;
   }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }


  onSubmit() {

    if (this.formulario.valid) {

      this.authService.resetPassword(this.formulario)
        .then((user: any) => {
          this.router.navigate(['/login']);
          this.toastRedefSenha();
        })
        .catch((error: any) => {
          this.toastError();
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



  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }



  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }


  toastError() {
    if (this.browserLg === 'de') {
      this.toastr.error('E-Mail-Adresse falsch!');
    }

    if (this.browserLg === 'en') {
      this.toastr.error('Email address incorrect!');
    }

    if (this.browserLg === 'es') {
      this.toastr.error('Dirección de correo electrónico incorrecta!');
    }

    if (this.browserLg === 'fr') {
      this.toastr.error('Adresse email incorrecte!');
    }

    if (this.browserLg === 'it') {
      this.toastr.error('Indirizzo email errato!');
    }


    if (this.browserLg === 'pt') {
      this.toastr.error('Endereço de email incorreto!');
    }

  }


  toastRedefSenha() {
    if (this.browserLg === 'de') {
      this.toastr.success('Eine E-Mail zum Zurücksetzen des Passworts wurde gesendet.');
    }

    if (this.browserLg === 'en') {
      this.toastr.success('A password reset email has been sent.');
    }

    if (this.browserLg === 'es') {
      this.toastr.success('Se ha enviado un correo electrónico para restablecer la contraseña.');
    }

    if (this.browserLg === 'fr') {
      this.toastr.success('Un email de réinitialisation de mot de passe a été envoyé.');
    }

    if (this.browserLg === 'it') {
      this.toastr.success('È stata inviata un\'email di reimpostazione della password.');
    }


    if (this.browserLg === 'pt') {
      this.toastr.success('Um e-mail de redefinição de senha foi enviado.');
    }
  }



}
