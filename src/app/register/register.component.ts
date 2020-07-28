import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators/';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { UsuarioService } from '../shared/service/usuario/usuario.service';
import { AuthService } from '../shared/service/auth/auth.service';

import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });

  }



  // validação assycrona de email [this.validarEmail.bind(this)]
  /*
  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }
*/


  onSubmit() {

    if (this.formulario.valid) {

      this.authService.createUser(this.formulario)
        .then((user: any) => {

         this.router.navigate(['menu']);
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
      this.toastr.error('E-Mail in Verwendung!');
    }

    if (this.browserLg === 'en') {
      this.toastr.error('Email in use!');
    }

    if (this.browserLg === 'es') {
      this.toastr.error('Correo electrónico en uso!');
    }

    if (this.browserLg === 'fr') {
      this.toastr.error('Email utilisé!');
    }

    if (this.browserLg === 'it') {
      this.toastr.error('Email in uso!');
    }


    if (this.browserLg === 'pt') {
      this.toastr.error('E-mail em uso!');
    }

  }



}
