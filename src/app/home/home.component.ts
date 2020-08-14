import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestMethod, RequestOptions } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private http: Http,
    private formBuilder: FormBuilder,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
  }


  ngOnInit() {

  }



  openUrlPlayStore() {
    window.location.href = 'https://play.google.com/store/apps/details?id=io.barberpro.starter&hl=pt_BR';
 }

  openUrlLinkedin() {
    window.location.href = 'https://www.linkedin.com/in/walmir-castro-83011869';
  }

  openUrlIn() {
    window.location.href = 'https://www.instagram.com/barberproapp/';
  }

  openUrlFace() {
    window.location.href = 'https://www.facebook.com/barberproapp/';
  }


}
