import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from 'angularfire2/auth';


import { take } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';


import { PaymentServiceService } from '../login/payment-service.service';
import { AuthService } from '../shared/service/auth/auth.service';
import { CalendarioService } from '../shared/service/calendario/calendario.service';
import { UserService } from '../shared/service/user/user.service';

import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  codigoUsuario: string;

  dataUserCreate: string;

  dataUserConnect: string;


  locale: string;

  days: any;

  browserLg: string;

  price: string;


  handler: any;


  badge: any;

  userIdOneSignalSalao: string;

  dataAgend: string;
  hora: string;
  dataHora: any;
  datahoraSQLite: any;
  strg: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    public pmt: PaymentServiceService,
    private translate: TranslateService,
    private userservice: UserService
  ) {
    this.afAuth.authState.pipe(take(1)).subscribe(user => {
      this.dataUserCreate = user.metadata.creationTime;
      this.dataUserConnect = user.metadata.lastSignInTime;
      this.codigoUsuario = user.uid;
    });

    this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.browserLg = this.translate.getBrowserCultureLang();
    this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
    this.locale = browserLang;
  }

  ngOnInit() {
    this.oneSignal();
    this.configHandler();
    this.mostrarPreços();
  }




  trial(status: string) {
    if (status !== 'active') {
      this.days = 14 - Math.trunc((Date.parse(this.dataUserConnect) - Date.parse(this.dataUserCreate)) / (24 * 60 * 60 * 1000));
      if (this.days < 0) {
        // open modalAss
        document.getElementById('openModalButton').click();
      } else {
        return this.badge = this.days;
      }
    }
  }

  assinar() {
    this.openHandler();
    this.router.navigate(['/login']);
  }

  naoAssinar() {
    this.userservice.delUser(this.codigoUsuario);
    this.router.navigate(['/login']);
  }


  oneSignal() {
    this.userIdOneSignalSalao = localStorage.getItem('userId');
    this.userservice.atualizarOneSignal(this.codigoUsuario, this.userIdOneSignalSalao);
  }


  private configHandler() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: './favicon.ico',
      locale: 'auto',
      token: token => {
        this.pmt.processPayment(token, this.codigoUsuario, this.browserLg);
      }
    });
  }



  mostrarPreços() {

    if (this.browserLg === 'de') {
      this.price = 'Abonnieren Sie für € 29 pro Monat';
    } else if (this.browserLg === 'es') {
      this.price = 'Suscríbete por € 29 por mes';
    } else if (this.browserLg === 'fr') {
      this.price = 'Abonnez-vous pour 29 € par mois';
    } else if (this.browserLg === 'it') {
      this.price = 'Iscriviti per € 29 al mese';
    } else if (this.browserLg === 'pt') {
      this.price = 'Subscrever 29 € por mês';
    } else if (this.browserLg === 'en') {
      this.price = 'Subscribe for $ 29 per Month';
    } else if (this.browserLg === 'pt-BR') {
      this.price = 'Subscrever R$ 39 por mês';
    } else {
      this.price = 'Subscribe for $ 29 per Month';
    }

  }

  openHandler() {

    if (this.browserLg === 'de') {
      this.handler.open({
        name: 'BarberPro',
        description: 'PRO-Abonnement',
        amount: 2900,
        currency: 'EUR'
      });
    } else if (this.browserLg === 'en') {
      this.handler.open({
        name: 'BarberPro',
        description: 'PRO Subscription',
        amount: 2900,
        currency: 'USD'
      });
    } else if (this.browserLg === 'es') {
      this.handler.open({
        name: 'BarberPro',
        description: 'PRO Suscripción',
        amount: 2900,
        currency: 'EUR'
      });
    } else if (this.browserLg === 'fr') {
      this.handler.open({
        name: 'BarberPro',
        description: 'Abonnement PRO',
        amount: 2900,
        currency: 'EUR'
      });
    } else if (this.browserLg === 'it') {
      this.handler.open({
        name: 'BarberPro',
        description: 'Abbonamento PRO',
        amount: 2900,
        currency: 'EUR'
      });
    } else if (this.browserLg === 'pt') {
      this.handler.open({
        name: 'BarberPro',
        description: 'Assinatura PRO',
        amount: 2900,
        currency: 'EUR'
      });
    } else if (this.browserLg === 'pt-BR') {
      this.handler.open({
        name: 'BarberPro',
        description: 'Assinatura PRO',
        amount: 3900,
        currency: 'BRL'
      });
    } else {
      this.handler.open({
        name: 'BarberPro',
        description: 'PRO Subscription',
        amount: 2900,
        currency: 'USD'
      });
    }
  }




  Logout() {
    //  localStorage.removeItem('userToken');
    this.authService.signOutFirebase();
    this.router.navigate(['/login']);
  }




}
