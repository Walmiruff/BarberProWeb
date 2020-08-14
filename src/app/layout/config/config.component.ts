import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { take, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase';


import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../../shared/service/user/user.service';
import { EditarComponent } from '../../shared/modal/editar/editar.component';
import { GravarComponent } from '../../shared/modal/gravar/gravar.component';
import { HorarioService } from '../../shared/service/horario/horario.service';
import { HorarioDom } from '../../shared/service/horario/HorarioDom';
import { HorarioSeg } from '../../shared/service/horario/HorarioSeg';
import { HorarioTer } from '../../shared/service/horario/HorarioTer';
import { HorarioQua } from '../../shared/service/horario/HorarioQua';
import { HorarioQui } from '../../shared/service/horario/HorarioQui';
import { HorarioSex } from '../../shared/service/horario/HorarioSex';
import { HorarioSab } from '../../shared/service/horario/HorarioSab';
import { PrecosService } from '../../shared/service/preco/precos.service';
import { IPrecos, IArray } from '../../shared/service/preco/precos';
import { ErroModalComponent } from '../../shared/modal/erro-modal/erro-modal.component';
import { IPaises } from '../../shared/models/paises';
import { AuthService } from '../../shared/service/auth/auth.service';
import { UsuarioService } from '../../shared/service/usuario/usuario.service';

import { TranslateService } from '@ngx-translate/core';




@ViewChild('cropper', undefined)

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {


  ativarDesativar: boolean;
  mostrarHoraDom: boolean;
  mostrarHoraSeg: boolean;
  mostrarHoraTer: boolean;
  mostrarHoraQua: boolean;
  mostrarHoraQui: boolean;
  mostrarHoraSex: boolean;
  mostrarHoraSab: boolean;
  horariosDom$: Observable<HorarioDom[]>;
  horariosSeg$: Observable<HorarioSeg[]>;
  horariosTer$: Observable<HorarioTer[]>;
  horariosQua$: Observable<HorarioQua[]>;
  horariosQui$: Observable<HorarioQui[]>;
  horariosSex$: Observable<HorarioSex[]>;
  horariosSab$: Observable<HorarioSab[]>;
  precos$: Observable<IArray[]>;
  formulario: FormGroup;
  myFormDomingo: FormGroup;
  myFormSegunda: FormGroup;
  myFormTerca: FormGroup;
  myFormQuarta: FormGroup;
  myFormQuinta: FormGroup;
  myFormSexta: FormGroup;
  myFormSabado: FormGroup;
  myFormPrecos: FormGroup;
  codigoUsuario: string;
  userIdOneSignal: string;
  dados: HorarioService;
  lat: number;
  long: number;
  paises$: Observable<any>;
  downloadURL: string;
  downloadURLLogo: string;
  browserLangua: string;
  formularioContato: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private modalService: NgbModal,
    private horarioService: HorarioService,
    private precoService: PrecosService,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private toastr: ToastrService,
    private translate: TranslateService,
    private usuarioService: UsuarioService,
    //  private activeModal: NgbActiveModal,
  ) {
    

    this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
    this.browserLangua = browserLang;
  }



  ngOnInit() {
    this.afAuth.authState.pipe(take(1)).subscribe(user => {
      this.codigoUsuario = user.uid;
      this.ativarDesativar = true;
      // this.codigoUsuario = this.route.snapshot.params['id'];
      this.configurarFormulario();
      this.carregarUsuario(this.codigoUsuario);
  
      this.configuraFormularioContato();
  
      this.configurarformularioDom();
      this.configurarformularioSeg();
      this.configurarformularioTer();
      this.configurarformularioQua();
      this.configurarformularioQui();
      this.configurarformularioSex();
      this.configurarformularioSab();
      this.carregarformularioHorario(this.codigoUsuario);
  
      this.configurarformularioPrecos();
  
      this.carregaObservables();
  
      this.precos$ = this.precoService.getListaPrecos(this.codigoUsuario);
      this.carregarformulariopreços(this.codigoUsuario);
  
      this.paises$ = this.userService.getPaises();
  
      this.carregaFoto();
      this.carregaFotoLogo();
      this.oneSignal();
    });
  }

  oneSignal() {
    this.userIdOneSignal = localStorage.getItem('userId');
  }

  onSubmit() {
    this.userService.getListaLocalizacao(this.formulario)
      .then(dados => {
        this.lat = (dados.resourceSets[0].resources[0].geocodePoints[0].coordinates[0]);
        this.long = (dados.resourceSets[0].resources[0].geocodePoints[0].coordinates[1]);
        this.formulario.patchValue({
          lat: this.lat,
          long: this.long
        });
        this.salvaEditaFormEnd(this.lat, this.long);
      },
        (error: any) => this.modalService.open(ErroModalComponent));
  }


  configurarformularioPrecos() {
    this.myFormPrecos = this.formBuilder.group({
      id: [null],
      txt_NomeSalao: [null],
      fk: [null],
      userIdOneSignalSalao: [null],
      formArrayPrecos: this.formBuilder.array([this.getArrayPrecos()])
    });
  }


  configurarformularioDom() {
    this.myFormDomingo = this.fb.group({
      id: [null],
      fk: [null],
      closedDom: [null],
      formArrayDomingo: this.fb.array([this.getArrayDomingo()]),
    });
  }

  configurarformularioSeg() {
    this.myFormSegunda = this.fb.group({
      id: [null],
      fk: [null],
      closedSeg: [null],
      formArraySegunda: this.fb.array([this.getArraySegunda()]),
    });
  }

  configuraFormularioContato() {
    this.formularioContato = this.formBuilder.group({
      message: [null, [Validators.required, Validators.maxLength(2000)]],
      yourName: [null, [Validators.required, Validators.maxLength(60)]],
      yourEmail: [null, [Validators.required, Validators.email, Validators.maxLength(60)]],
      assunto: [null, [Validators.required, Validators.maxLength(60)]],
    });
  }

  configurarformularioTer() {
    this.myFormTerca = this.fb.group({
      id: [null],
      fk: [null],
      closedTer: [null],
      formArrayTerca: this.fb.array([this.getArrayTerca()]),
    });
  }


  configurarformularioQua() {
    this.myFormQuarta = this.fb.group({
      id: [null],
      fk: [null],
      closedQua: [null],
      formArrayQuarta: this.fb.array([this.getArrayQuarta()]),
    });
  }

  configurarformularioQui() {
    this.myFormQuinta = this.fb.group({
      id: [null],
      fk: [null],
      closedQui: [null],
      formArrayQuinta: this.fb.array([this.getArrayQuinta()]),
    });
  }



  configurarformularioSex() {
    this.myFormSexta = this.fb.group({
      id: [null],
      fk: [null],
      closedSex: [null],
      formArraySexta: this.fb.array([this.getArraySexta()]),
    });
  }



  configurarformularioSab() {
    this.myFormSabado = this.fb.group({
      id: [null],
      fk: [null],
      closedSab: [null],
      formArraySabado: this.fb.array([this.getArraySabado()]),
    });
  }




  getArrayPrecos() {
    return this.fb.group({
      itemPropertyServico: [''],
      itemPropertyPreco: ['']
    });
  }



  getArrayDomingo() {
    return this.fb.group({
      itemPropertyOneDomingo: [''],
      itemPropertyTwoDomingo: ['']
    });
  }



  getArraySegunda() {
    return this.fb.group({
      itemPropertyOneSegunda: [''],
      itemPropertyTwoSegunda: ['']
    });
  }




  getArrayTerca() {
    return this.fb.group({
      itemPropertyOneTerca: [''],
      itemPropertyTwoTerca: ['']
    });
  }



  getArrayQuarta() {
    return this.fb.group({
      itemPropertyOneQuarta: [''],
      itemPropertyTwoQuarta: ['']
    });
  }



  getArrayQuinta() {
    return this.fb.group({
      itemPropertyOneQuinta: [''],
      itemPropertyTwoQuinta: ['']
    });
  }



  getArraySexta() {
    return this.fb.group({
      itemPropertyOneSexta: [''],
      itemPropertyTwoSexta: ['']
    });
  }



  getArraySabado() {
    return this.fb.group({
      itemPropertyOneSabado: [''],
      itemPropertyTwoSabado: ['']
    });
  }


  addInputPrecos() {
    const arrayControl = <FormArray>this.myFormPrecos.controls['formArrayPrecos'];
    arrayControl.push(this.getArrayPrecos());
  }

  addInputDomingo() {
    const arrayControl = <FormArray>this.myFormDomingo.controls['formArrayDomingo'];
    arrayControl.push(this.getArrayDomingo());
  }

  addInputSegunda() {
    const arrayControl = <FormArray>this.myFormSegunda.controls['formArraySegunda'];
    arrayControl.push(this.getArraySegunda());
  }

  addInputTerca() {
    const arrayControl = <FormArray>this.myFormTerca.controls['formArrayTerca'];
    arrayControl.push(this.getArrayTerca());
  }


  addInputQuarta() {
    const arrayControl = <FormArray>this.myFormQuarta.controls['formArrayQuarta'];
    arrayControl.push(this.getArrayQuarta());
  }


  addInputQuinta() {
    const arrayControl = <FormArray>this.myFormQuinta.controls['formArrayQuinta'];
    arrayControl.push(this.getArrayQuinta());
  }

  addInputSexta() {
    const arrayControl = <FormArray>this.myFormSexta.controls['formArraySexta'];
    arrayControl.push(this.getArraySexta());
  }


  addInputSabado() {
    const arrayControl = <FormArray>this.myFormSabado.controls['formArraySabado'];
    arrayControl.push(this.getArraySabado());
  }


  delInputPrecos(index) {
    const arrayControl = <FormArray>this.myFormPrecos.controls['formArrayPrecos'];
    arrayControl.removeAt(index);
  }

  delInputDomingo(index: number) {
    const arrayControl = <FormArray>this.myFormDomingo.controls['formArrayDomingo'];
    arrayControl.removeAt(index);
  }

  delInputSegunda(index: number) {
    const arrayControl = <FormArray>this.myFormSegunda.controls['formArraySegunda'];
    arrayControl.removeAt(index);
  }



  delInputTerca(index: number) {
    const arrayControl = <FormArray>this.myFormTerca.controls['formArrayTerca'];
    arrayControl.removeAt(index);
  }


  delInputQuarta(index: number) {
    const arrayControl = <FormArray>this.myFormQuarta.controls['formArrayQuarta'];
    arrayControl.removeAt(index);
  }


  delInputQuinta(index: number) {
    const arrayControl = <FormArray>this.myFormQuinta.controls['formArrayQuinta'];
    arrayControl.removeAt(index);
  }



  delInputSexta(index: number) {
    const arrayControl = <FormArray>this.myFormSexta.controls['formArraySexta'];
    arrayControl.removeAt(index);
  }



  delInputSabado(index: number) {
    const arrayControl = <FormArray>this.myFormSabado.controls['formArraySabado'];
    arrayControl.removeAt(index);
  }


  sendEmail() {
    if (this.formularioContato.valid === true) {
      this.usuarioService.postEmail(this.formularioContato);

      if (this.browserLangua === 'de') {
        this.toastr.success('Wir haben Ihre Nachricht erhalten, wir werden uns so schnell wie möglich bei Ihnen melden!');
      }
      if (this.browserLangua === 'en') {
        this.toastr.success('We received your message, we will contact you as soon as possible!');
      }

      if (this.browserLangua === 'es') {
        this.toastr.success('¡Recibimos su mensaje, entraremos en contacto lo más pronto posible!');
      }

      if (this.browserLangua === 'fr') {
        this.toastr.success('Nous avons reçu votre message, nous vous contacterons dès que possible!');
      }

      if (this.browserLangua === 'it') {
        this.toastr.success('Abbiamo ricevuto il tuo messaggio, ti contatteremo al più presto!');
      }

      if (this.browserLangua === 'pt') {
        this.toastr.success('Recebemos sua mensagem, entraremos em contato o mais breve possível!');
      }

      this.formularioContato.reset();
    } else {
      this.verificaValidacoesForm(this.formularioContato);
    }
  }

  onClickAddPrecos() {
    if (this.myFormPrecos.get('id').value != null) {
      this.myFormPrecos.patchValue({
        txt_NomeSalao: this.formulario.get('txt_NomeSalao').value
      });
      this.precoService.putPrecos(this.myFormPrecos)
        .then(dados => {
          //   alert('Information from the barbershop has been saved!');
        });
    }
    if (this.myFormPrecos.get('id').value == null) {
      this.myFormPrecos.patchValue({
        userIdOneSignalSalao: this.userIdOneSignal,
        fk: this.codigoUsuario,
        id: this.codigoUsuario,
        txt_NomeSalao: this.formulario.get('txt_NomeSalao').value
      });
      this.precoService.postPrecos(this.myFormPrecos)
        .then(dados => {
          // this.precoService.getListaPrecos2(this.codigoUsuario)
          // .pipe(take(1))
          // .subscribe(dadosPreco => {
          this.myFormPrecos.patchValue({ id: this.codigoUsuario });
          //    });
          //   alert('Information from the barbershop has been saved!');
        });
    }
    this.precos$ = this.precoService.getListaPrecos(this.codigoUsuario);
  }



  onClickAdd() {


    if (this.myFormDomingo.get('id').value != null) {
      this.myFormDomingo.patchValue({ closedDom: this.mostrarHoraDom });
      this.horarioService.putHorarioDom(this.myFormDomingo, this.codigoUsuario)
        .then(dados => {

          //   alert('Information from the barbershop has been saved!');
        });
    }
    if (this.myFormDomingo.get('id').value == null) {
      this.myFormDomingo.patchValue({
        closedDom: this.mostrarHoraDom,
        fk: this.codigoUsuario,
        id: this.codigoUsuario
      });
      this.horarioService.postHorarioDom(this.myFormDomingo)
        .then(dados => {
          this.horarioService.buscarPorCodigoDom(this.codigoUsuario)
            .pipe(take(1))
            .subscribe(dadosDom => {
              this.myFormDomingo.patchValue({ id: dadosDom[0].id });
            });
          //   alert('Information from the barbershop has been saved!');
        });
    }




    if (this.myFormSegunda.get('id').value != null) {
      this.myFormSegunda.patchValue({ closedSeg: this.mostrarHoraSeg });
      this.horarioService.putHorarioSeg(this.myFormSegunda, this.codigoUsuario)
        .then(dados => {
          //   alert('Information from the barbershop has been saved!');
        });
    }
    if (this.myFormSegunda.get('id').value == null) {
      this.myFormSegunda.patchValue({
        closedSeg: this.mostrarHoraSeg, fk: this.codigoUsuario,
        id: this.codigoUsuario
      });
      this.horarioService.postHorarioSeg(this.myFormSegunda)
        .then(dados => {

          this.horarioService.buscarPorCodigoSeg(this.codigoUsuario)
            .pipe(take(1))
            .subscribe(dadosSeg => {
              this.myFormSegunda.patchValue({ id: dadosSeg[0].id });
            });
        });
    }




    if (this.myFormTerca.get('id').value != null) {
      this.myFormTerca.patchValue({ closedTer: this.mostrarHoraTer });
      this.horarioService.putHorarioTer(this.myFormTerca, this.codigoUsuario)
        .then(dados => {
          //   alert('Information from the barbershop has been saved!');
        });
    }
    if (this.myFormTerca.get('id').value == null) {
      this.myFormTerca.patchValue({
        closedTer: this.mostrarHoraTer, fk: this.codigoUsuario,
        id: this.codigoUsuario
      });
      this.horarioService.postHorarioTer(this.myFormTerca)
        .then(dados => {

          this.horarioService.buscarPorCodigoTer(this.codigoUsuario)
            .pipe(take(1))
            .subscribe(dadosTer => {
              this.myFormTerca.patchValue({ id: dadosTer[0].id });
            });
        });
    }




    if (this.myFormQuarta.get('id').value != null) {
      this.myFormQuarta.patchValue({ closedQua: this.mostrarHoraQua });
      this.horarioService.putHorarioQua(this.myFormQuarta, this.codigoUsuario)
        .then(dados => {
          //   alert('Information from the barbershop has been saved!');
        });
    }
    if (this.myFormQuarta.get('id').value == null) {
      this.myFormQuarta.patchValue({
        closedQua: this.mostrarHoraQua, fk: this.codigoUsuario,
        id: this.codigoUsuario
      });
      this.horarioService.postHorarioQua(this.myFormQuarta)
        .then(dados => {
          this.horarioService.buscarPorCodigoQua(this.codigoUsuario)
            .pipe(take(1))
            .subscribe(dadosQua => {
              this.myFormQuarta.patchValue({ id: dadosQua[0].id });
            });
        });
    }





    if (this.myFormQuinta.get('id').value != null) {
      this.myFormQuinta.patchValue({ closedQui: this.mostrarHoraQui });
      this.horarioService.putHorarioQui(this.myFormQuinta, this.codigoUsuario)
        .then(dados => {
          //   alert('Information from the barbershop has been saved!');
        });
    }
    if (this.myFormQuinta.get('id').value == null) {
      this.myFormQuinta.patchValue({
        closedQui: this.mostrarHoraQui, fk: this.codigoUsuario,
        id: this.codigoUsuario
      });
      this.myFormQuinta.patchValue({ fk: this.codigoUsuario });
      this.horarioService.postHorarioQui(this.myFormQuinta)
        .then(dados => {

          this.horarioService.buscarPorCodigoQui(this.codigoUsuario)
            .pipe(take(1))
            .subscribe(dadosQui => {
              this.myFormQuinta.patchValue({ id: dadosQui[0].id });
            });
        });
    }





    if (this.myFormSexta.get('id').value != null) {
      this.myFormSexta.patchValue({ closedSex: this.mostrarHoraSex });
      this.horarioService.putHorarioSex(this.myFormSexta, this.codigoUsuario)
        .then(dados => {
          //   alert('Information from the barbershop has been saved!');
        });
    }
    if (this.myFormSexta.get('id').value == null) {
      this.myFormSexta.patchValue({
        closedSex: this.mostrarHoraSex, fk: this.codigoUsuario,
        id: this.codigoUsuario
      });
      this.horarioService.postHorarioSex(this.myFormSexta)
        .then(dados => {

          this.horarioService.buscarPorCodigoSex(this.codigoUsuario)
            .pipe(take(1))
            .subscribe(dadosSex => {
              this.myFormSexta.patchValue({ id: dadosSex[0].id });
            });
        });
    }






    if (this.myFormSabado.get('id').value != null) {
      this.myFormSabado.patchValue({ closedSab: this.mostrarHoraSab });
      this.horarioService.putHorarioSab(this.myFormSabado, this.codigoUsuario)
        .then(dados => {
          //   alert('Information from the barbershop has been saved!');
        });
    }
    if (this.myFormSabado.get('id').value == null) {
      this.myFormSabado.patchValue({
        closedSab: this.mostrarHoraSab, fk: this.codigoUsuario,
        id: this.codigoUsuario
      });
      this.horarioService.postHorarioSab(this.myFormSabado)
        .then(dados => {


          this.horarioService.buscarPorCodigoSab(this.codigoUsuario)
            .pipe(take(1))
            .subscribe(dadosSab => {
              this.myFormSabado.patchValue({ id: dadosSab[0].id });
            });
        });
    }



    this.carregaObservables();
  }




  carregarformulariopreços(codigo: string) {

    this.precoService.getListaPrecos2(codigo)
      .pipe(take(1))
      .subscribe(dados => {

        this.criarControlesPrecos(dados[0].formArrayPrecos.length);
        this.myFormPrecos.patchValue(dados[0]);
      },
        (error: any) => { });
  }




  /*

    carregarformulariopreços(codigo: number) {

      this.precoService.buscarPorCodigoPreco(codigo)
        .then(dados => {

          this.criarControlesPrecos(dados[0].formArrayPrecos.length);
          this.myFormPrecos.patchValue(dados[0]);
        },
        (error: any) => {});
    }

  */




  carregarformularioHorario(codigo: string) {

    this.horarioService.buscarPorCodigoDom(codigo)
      .pipe(take(1))
      .subscribe(dadosDom => {

        this.criarControlesDom(dadosDom[0].formArrayDomingo.length);
        this.myFormDomingo.patchValue(dadosDom[0]);
        if (this.myFormDomingo.get('fk').value != null && this.myFormDomingo.get('closedDom').value === true) {
          this.mostrarHoraDom = true;
        } else {
          this.mostrarHoraDom = false;
        }
      },
        (error: any) => { });


    this.horarioService.buscarPorCodigoSeg(codigo)
      .pipe(take(1))
      .subscribe(dadosSeg => {

        this.criarControlesSeg(dadosSeg[0].formArraySegunda.length);
        this.myFormSegunda.patchValue(dadosSeg[0]);
        if (this.myFormSegunda.get('fk').value != null && this.myFormSegunda.get('closedSeg').value === true) {
          this.mostrarHoraSeg = true;
        } else {
          this.mostrarHoraSeg = false;
        }
      });


    this.horarioService.buscarPorCodigoTer(codigo)
      .pipe(take(1))
      .subscribe(dadosTer => {

        this.criarControlesTer(dadosTer[0].formArrayTerca.length);
        this.myFormTerca.patchValue(dadosTer[0]);
        if (this.myFormTerca.get('fk').value != null && this.myFormTerca.get('closedTer').value === true) {
          this.mostrarHoraTer = true;
        } else {
          this.mostrarHoraTer = false;
        }
      });




    this.horarioService.buscarPorCodigoQua(codigo)
      .pipe(take(1))
      .subscribe(dadosQua => {

        this.criarControlesQua(dadosQua[0].formArrayQuarta.length);
        this.myFormQuarta.patchValue(dadosQua[0]);
        if (this.myFormQuarta.get('fk').value != null && this.myFormQuarta.get('closedQua').value === true) {
          this.mostrarHoraQua = true;
        } else {
          this.mostrarHoraQua = false;
        }
      });



    this.horarioService.buscarPorCodigoQui(codigo)
      .pipe(take(1))
      .subscribe(dadosQui => {

        this.criarControlesQui(dadosQui[0].formArrayQuinta.length);
        this.myFormQuinta.patchValue(dadosQui[0]);
        if (this.myFormQuinta.get('fk').value != null && this.myFormQuinta.get('closedQui').value === true) {
          this.mostrarHoraQui = true;
        } else {
          this.mostrarHoraQui = false;
        }
      });


    this.horarioService.buscarPorCodigoSex(codigo)
      .pipe(take(1))
      .subscribe(dadosSex => {

        this.criarControlesSex(dadosSex[0].formArraySexta.length);
        this.myFormSexta.patchValue(dadosSex[0]);
        if (this.myFormSexta.get('fk').value != null && this.myFormSexta.get('closedSex').value === true) {
          this.mostrarHoraSex = true;
        } else {
          this.mostrarHoraSex = false;
        }
      });



    this.horarioService.buscarPorCodigoSab(codigo)
      .pipe(take(1))
      .subscribe(dadosSab => {

        this.criarControlesSab(dadosSab[0].formArraySabado.length);
        this.myFormSabado.patchValue(dadosSab[0]);
        if (this.myFormSabado.get('fk').value != null && this.myFormSabado.get('closedSab').value === true) {
          this.mostrarHoraSab = true;
        } else {
          this.mostrarHoraSab = false;
        }
      });

  }






  carregaObservables() {

    this.horariosDom$ = this.horarioService.getListaHorarioDom(this.codigoUsuario);
    this.horariosSeg$ = this.horarioService.getListaHorarioSeg(this.codigoUsuario);
    this.horariosTer$ = this.horarioService.getListaHorarioTer(this.codigoUsuario);
    this.horariosQua$ = this.horarioService.getListaHorarioQua(this.codigoUsuario);
    this.horariosQui$ = this.horarioService.getListaHorarioQui(this.codigoUsuario);
    this.horariosSex$ = this.horarioService.getListaHorarioSex(this.codigoUsuario);
    this.horariosSab$ = this.horarioService.getListaHorarioSab(this.codigoUsuario);
  }



  criarControlesPrecos(arrayCount: number) {
    // cria os controles antes de preencher
    for (let i = 0; i < arrayCount - 1; i++) {
      const arrayControl = <FormArray>this.myFormPrecos.controls['formArrayPrecos'];
      arrayControl.push(this.getArrayPrecos());
    }
  }


  criarControlesDom(arrayCount: number) {
    // cria os controles antes de preencher
    for (let i = 0; i < arrayCount - 1; i++) {
      const arrayControl = <FormArray>this.myFormDomingo.controls['formArrayDomingo'];
      arrayControl.push(this.getArrayDomingo());
    }
  }


  criarControlesSeg(arrayCount: number) {
    // cria os controles antes de preencher
    for (let i = 0; i < arrayCount - 1; i++) {
      const arrayControl = <FormArray>this.myFormSegunda.controls['formArraySegunda'];
      arrayControl.push(this.getArraySegunda());
    }
  }


  criarControlesTer(arrayCount: number) {
    // cria os controles antes de preencher
    for (let i = 0; i < arrayCount - 1; i++) {
      const arrayControl = <FormArray>this.myFormTerca.controls['formArrayTerca'];
      arrayControl.push(this.getArrayTerca());
    }
  }


  criarControlesQua(arrayCount: number) {
    // cria os controles antes de preencher
    for (let i = 0; i < arrayCount - 1; i++) {
      const arrayControl = <FormArray>this.myFormQuarta.controls['formArrayQuarta'];
      arrayControl.push(this.getArrayQuarta());
    }
  }


  criarControlesQui(arrayCount: number) {
    // cria os controles antes de preencher
    for (let i = 0; i < arrayCount - 1; i++) {
      const arrayControl = <FormArray>this.myFormQuinta.controls['formArrayQuinta'];
      arrayControl.push(this.getArrayQuinta());
    }
  }


  criarControlesSex(arrayCount: number) {
    // cria os controles antes de preencher
    for (let i = 0; i < arrayCount - 1; i++) {
      const arrayControl = <FormArray>this.myFormSexta.controls['formArraySexta'];
      arrayControl.push(this.getArraySexta());
    }
  }


  criarControlesSab(arrayCount: number) {
    // cria os controles antes de preencher
    for (let i = 0; i < arrayCount - 1; i++) {
      const arrayControl = <FormArray>this.myFormSabado.controls['formArraySabado'];
      arrayControl.push(this.getArraySabado());
    }
  }






  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      fk: [this.codigoUsuario],
      id: [null],
      lat: [null],
      long: [null],
      url: [null],
      urlLogo: [null],
      txt_NomeSalao: [null, [Validators.required, Validators.maxLength(90)]],
      txt_NomeResp: [null, [Validators.maxLength(90)]],

      txt_pais: [null, [Validators.required, Validators.maxLength(50)]],
      txt_End: [null, [Validators.required, Validators.maxLength(200)]],
      txt_CEP: [null, [Validators.required, Validators.maxLength(25)]],
      txt_Cidade: [null, [Validators.required, Validators.maxLength(50)]],
      txt_UF: [null, [Validators.required, Validators.maxLength(50)]],
      txt_Numero: [null, [Validators.required]],

      txt_Cel: [null, [Validators.maxLength(25)]],
      txt_Tel: [null, Validators.maxLength(25)],
      txt_email: [null, [Validators.email, Validators.maxLength(80)]],
    });
  }




  carregarUsuario(codigo: string) {
    this.userService.buscarPorCodigo(codigo)
      .pipe(take(1))
      .subscribe(dados => {
        this.formulario.patchValue(dados);
        this.ativarDesativar = false;
        //  console.log(dados);
      },
        (error: any) => { });

  }



  salvaEditaFormEnd(lat: number, long: number) {

    if (this.formulario.valid && this.formulario.get('id').value != null) {
      // update
      // tslint:disable-next-line:radix
      this.userService.putUsuario(this.formulario)
        .then(dados => {
          //    alert('Information from the barbershop has been update!');
          //   this.modalService.open(EditarComponent);
          this.toastEditar();

        },
          (error: any) => { this.toastErro(); });
    }


    if (this.formulario.valid && this.formulario.get('id').value == null) {
      // insert
      this.userService.postUsuario(this.formulario)
        .then(dados => {
          //   alert('Information from the barbershop has been saved!');
          //   this.modalService.open(GravarComponent);
          this.toastSucesso();
          this.formulario.patchValue({ id: this.codigoUsuario });
          // fazer um get para pegar a chave e salvar a foto
          this.ativarDesativar = false;
        },
          (error: any) => { this.toastErro(); });
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

  onInput() {
    // verifica se entrou algo no input e perguntar
    // com canDesactivate se quer mudar a rota.
  }
/*
  Logout() {
    //  localStorage.removeItem('userToken');
    this.authService.signOutFirebase();
    this.router.navigate(['/login']);
  }*/





  onClickMostraHoraDom() {
    this.mostrarHoraDom = !this.mostrarHoraDom;
  }

  onClickMostraHoraSeg() {
    this.mostrarHoraSeg = !this.mostrarHoraSeg;
  }


  onClickMostraHoraTer() {
    this.mostrarHoraTer = !this.mostrarHoraTer;
  }


  onClickMostraHoraQua() {
    this.mostrarHoraQua = !this.mostrarHoraQua;
  }


  onClickMostraHoraQui() {
    this.mostrarHoraQui = !this.mostrarHoraQui;
  }


  onClickMostraHoraSex() {
    this.mostrarHoraSex = !this.mostrarHoraSex;
  }


  onClickMostraHoraSab() {
    this.mostrarHoraSab = !this.mostrarHoraSab;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }





  featuredPhotoSelectedLogo(event: any) {

    const file: File = event.target.files[0];
    const metaData = { 'contentType': file.type };
    const storageRef: firebase.storage.Reference = firebase.storage().ref('/userconfig/logo' + this.codigoUsuario);
    storageRef.put(file, metaData).then(resp => {
      storageRef.getDownloadURL().then(url => {
        this.userService.putImageLogo(url, this.formulario);
        this.downloadURLLogo = url;
        this.formulario.patchValue({ urlLogo: this.downloadURLLogo });
      });
    });
  }


  carregaFotoLogo() {
    const storageRef: firebase.storage.Reference = firebase.storage().ref('/userconfig/logo' + this.codigoUsuario);
    storageRef.getDownloadURL().then(url => {
      this.downloadURLLogo = url;
    });
  }



  featuredPhotoSelected(event: any) {

    const file: File = event.target.files[0];
    const metaData = { 'contentType': file.type };
    const storageRef: firebase.storage.Reference = firebase.storage().ref('/userconfig/' + this.codigoUsuario);
    storageRef.put(file, metaData).then(resp => {
      storageRef.getDownloadURL().then(url => {
        this.userService.putImage(url, this.formulario);
        this.downloadURL = url;
        this.formulario.patchValue({ url: this.downloadURL });
      });
    });
  }


  carregaFoto() {
    const storageRef: firebase.storage.Reference = firebase.storage().ref('/userconfig/' + this.codigoUsuario);
    storageRef.getDownloadURL().then(url => {
      this.downloadURL = url;
    });
  }



  toastSucesso() {
    if (this.browserLangua === 'de') {
      this.toastr.success('Informationen aus dem Friseursalon wurden gespeichert!');
    }

    if (this.browserLangua === 'en') {
      this.toastr.success('Information from the barbershop has been saved!');
    }

    if (this.browserLangua === 'es') {
      this.toastr.success('¡Se ha guardado información de la barbería!');
    }

    if (this.browserLangua === 'fr') {
      this.toastr.success('Les informations du salon de coiffure ont été enregistrées!');
    }

    if (this.browserLangua === 'it') {
      this.toastr.success('Le informazioni dal barbiere sono state salvate!');
    }

    if (this.browserLangua === 'pt') {
      this.toastr.success('Informações da barbearia foram salvas!');
    }
  }

  toastEditar() {
    if (this.browserLangua === 'de') {
      this.toastr.info('Informationen aus dem Friseursalon wurden aktualisiert!');
    }

    if (this.browserLangua === 'en') {
      this.toastr.info('Information from the barbershop has been update!');
    }

    if (this.browserLangua === 'es') {
      this.toastr.info('La información de la barbería ha sido actualizada!');
    }


    if (this.browserLangua === 'fr') {
      this.toastr.info('Les informations du salon de coiffure ont été mises à jour!');
    }

    if (this.browserLangua === 'it') {
      this.toastr.info('Le informazioni dal barbiere sono state aggiornate!');
    }

    if (this.browserLangua === 'pt') {
      this.toastr.info('Informações da barbearia foram atualizadas!');
    }

  }

  toastErro() {
    if (this.browserLangua === 'de') {
      this.toastr.error('Oops! Es ist etwas Unerwartetes passiert, bitte versuchen Sie es erneut! :(');
    }

    if (this.browserLangua === 'en') {
      this.toastr.error('Oops! Something unexpected happened please try again! :(');
    }

    if (this.browserLangua === 'es') {
      this.toastr.error('Oops! Algo inesperado sucedió, por favor intente de nuevo! :(');
    }

    if (this.browserLangua === 'fr') {
      this.toastr.error('Oops! Quelque chose d\'inattendu s\'est passé s\'il vous plaît essayez à nouveau! :(');
    }

    if (this.browserLangua === 'it') {
      this.toastr.error('Oops! È successo qualcosa di inaspettato per favore riprova! :(');
    }

    if (this.browserLangua === 'pt') {
      this.toastr.error('Oops! Algo inesperado aconteceu por favor tente novamente! :(');
    }
  }






}

