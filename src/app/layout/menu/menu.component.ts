import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject, Observable, Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarEventTitleFormatter
} from 'angular-calendar';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { CustomEventTitleFormatter } from './custom-event-title-formatter.provider';
import { colors } from '../demo-utils/colors';

import { take, debounceTime, auditTime } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ErroModalComponent } from '../../shared/modal/erro-modal/erro-modal.component';

import { PaymentServiceService } from '../../login/payment-service.service';
import { AuthService } from '../../shared/service/auth/auth.service';
import { CalendarioService } from '../../shared/service/calendario/calendario.service';
import { UserService } from '../../shared/service/user/user.service';

import { environment } from 'src/environments/environment';

import mwlFlatpickr from 'flatpickr';
import FlatpickrI18nde from 'flatpickr/dist/l10n/de.js';
import FlatpickrI18nes from 'flatpickr/dist/l10n/es.js';
import FlatpickrI18nfr from 'flatpickr/dist/l10n/fr.js';
import FlatpickrI18nit from 'flatpickr/dist/l10n/it.js';
import FlatpickrI18npt from 'flatpickr/dist/l10n/pt.js';


@Component({
  selector: 'app-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter
    }
  ]
})



export class MenuComponent implements OnInit, OnDestroy {
  sub: Subscription;

  codigoUsuario: string;

  dataUserCreate: string;

  dataUserConnect: string;

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  locale: string;


  browserLg: string;

  price: string;

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events = [] as CalendarEvent[];


  activeDayIsOpen = true;

  formulario: FormGroup;

  handler: any;

  days: any;

  myClient: any;

  badge: any;

  userIdOneSignalSalao: string;

  dataAgend: string;
  hora: string;
  dataHora: any;
  datahoraSQLite: any;
  strg: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private modal: NgbModal,
    private calendarioService: CalendarioService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private afAuth: AngularFireAuth,
    public pmt: PaymentServiceService,
    private translate: TranslateService,
    private userservice: UserService
  ) {
        this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.browserLg = this.translate.getBrowserCultureLang();
    this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
    this.locale = browserLang;
  }



  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      //  this.dataUserCreate = user.metadata.creationTime;
       // this.dataUserConnect = user.metadata.lastSignInTime;
        this.codigoUsuario = user.uid;
        this.carregaCalendario(this.codigoUsuario);
      });
    //  this.codigoUsuario = this.route.snapshot.params['id'];
    
    this.configurarFormulario();
   // this.configHandler();
  //  this.mostrarPreços();
    this.traduzFlatPicker();
   // this.oneSignal();
  }
/*
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
*/

  traduzFlatPicker() {
    if (this.locale === 'de') {
      mwlFlatpickr.localize(FlatpickrI18nde.de);
    } else if (this.locale === 'es') {
      mwlFlatpickr.localize(FlatpickrI18nes.es);
    } else if (this.locale === 'fr') {
      mwlFlatpickr.localize(FlatpickrI18nfr.fr);
    } else if (this.locale === 'it') {
      mwlFlatpickr.localize(FlatpickrI18nit.it);
    } else if (this.locale === 'pt') {
      mwlFlatpickr.localize(FlatpickrI18npt.pt);
    }
  }
/*
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
      this.price = 'Subscrever R$ 49 por mês';
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
        amount: 4900,
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

*/



  ngOnDestroy() {

    this.sub.unsubscribe();
  }

  carregaCalendario(codigo: string) {

    this.sub = this.calendarioService.getListaCalendario(codigo)
      .pipe()
      .subscribe(
        dados => {
          this.events.splice(0);
          for (let i = 0; i < dados.length; i++) {
            this.events.push({
              id: dados[i].key,
              fk: this.codigoUsuario,
              title: dados[i].title,
              userId: dados[i].userId,
              start: new Date(dados[i].start),
              end: new Date(dados[i].start),
              color: colors.blue,
              draggable: true,
              resizable: {
                beforeStart: true,
                afterEnd: true
              }
            });

            this.refresh.next();

          }

        },

        (error: any) => this.modalService.open(ErroModalComponent));

  }



/*
  Logout() {
    //  localStorage.removeItem('userToken');
    this.authService.signOutFirebase();
    this.router.navigate(['/login']);
  }
*/



  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }



  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newStart;
    this.handleEvent('Dropped or resized', event);

    this.formulario.patchValue({
      start: newStart,
      end: newStart,
      title: event.title,
      userId: event.userId
    });

    this.calendarioService.put(this.formulario, event.id)
      .then(dados => {
        this.enviarNotificacao(event);
      },
        (error: any) => this.modalService.open(ErroModalComponent));

    this.refresh.next();
  }



  atualizaCliente(event: CalendarEvent): void {
    this.formulario.patchValue({
      start: event.start,
      end: event.start,
      title: event.title,
      userId: event.userId
    });

    this.calendarioService.put(this.formulario, event.id)
      .then(dados => {

      },
        (error: any) => this.modalService.open(ErroModalComponent));

    this.refresh.next();
  }


  atualizaClienteHora(event: CalendarEvent): void {

    this.formulario.patchValue({
      start: event.start,
      end: event.start,
      title: event.title,
      userId: event.userId
    });

    this.calendarioService.put(this.formulario, event.id)
      .then(dados => {
        this.enviarNotificacao(event);
      },
        (error: any) => this.modalService.open(ErroModalComponent));
    this.refresh.next();
  }

  enviarNotificacao(event: CalendarEvent) {
    this.datahoraSQLite = new Date(event.start);
    this.dataAgend = (this.datahoraSQLite).toLocaleDateString();
    this.strg = (this.datahoraSQLite).toLocaleTimeString();
    this.hora = this.strg.substring(0, this.strg.length - 3);

    if (this.locale === 'de') {
      const data = {
        contents: { en: 'Hallo ' + event.title.split(' ')[0] + '! Sie wurden für umgebucht ' + this.hora + ' - ' + this.dataAgend },
        include_player_ids: [event.userId],
      };
      this.calendarioService.sendNotification(this.codigoUsuario, data);
    } else if (this.locale === 'es') {
      const data = {
        contents: {
          en: '¡Hola ' + event.title.split(' ')[0] + '! Usted tuvo horario remarcado para '
            + this.hora + ' - ' + this.dataAgend
        },
        include_player_ids: [event.userId],
      };
      this.calendarioService.sendNotification(this.codigoUsuario, data);
    } else if (this.locale === 'fr') {
      const data = {
        contents: { en: 'Bonjour ' + event.title.split(' ')[0] + '! Vous avez été reloué pour ' + this.hora + ' - ' + this.dataAgend },
        include_player_ids: [event.userId],
      };
      this.calendarioService.sendNotification(this.codigoUsuario, data);
    } else if (this.locale === 'it') {
      const data = {
        contents: { en: 'Ciao ' + event.title.split(' ')[0] + '! Sei stato riprenotato per ' + this.hora + ' - ' + this.dataAgend },
        include_player_ids: [event.userId],
      };
      this.calendarioService.sendNotification(this.codigoUsuario, data);
    } else if (this.locale === 'pt') {
      const data = {
        contents: { en: 'Olá ' + event.title.split(' ')[0] + '! Você foi reagendado para ' + this.hora + ' - ' + this.dataAgend },
        include_player_ids: [event.userId],
      };
      this.calendarioService.sendNotification(this.codigoUsuario, data);
    } else {
      const data = {
        contents: { en: 'Hello ' + event.title.split(' ')[0] + '! You have been rebooked for ' + this.hora + ' - ' + this.dataAgend },
        include_player_ids: [event.userId],
      };
      this.calendarioService.sendNotification(this.codigoUsuario, data);
    }
  }




  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }



  addEvent(): void {

    this.configurarFormulario();
    //  this.formulario.patchValue(this.events);
    this.calendarioService.post(this.formulario)
      /*.pipe(take(1))
      .subscribe*/
      .then(dados => {
        this.carregaCalendario(this.codigoUsuario);
      },
        (error: any) => this.modalService.open(ErroModalComponent));

  }



  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      userId: [null],
      fk: this.codigoUsuario,
      title: '',
      start: startOfDay(new Date()),
      end: startOfDay(new Date()),
      color: colors.blue,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
  }

  onDelete(id: string, codigo: string) {
    // fazer um alert para confimar o delete

    this.calendarioService.deleteCliente(id, this.codigoUsuario)
      .then(x => {

        // aqui coloca (paciente deletado com sucesso)!

      },
        (error: any) => this.modalService.open(ErroModalComponent));


  }



}
