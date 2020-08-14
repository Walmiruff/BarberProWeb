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
    window.open('https://play.google.com/store/apps/details?id=io.barberpro.starter&hl=pt_BR', '_system', 'location=yes');
 }

  openUrlLinkedin() {
    window.open('https://www.linkedin.com/in/walmir-castro-83011869', '_system', 'location=yes');
  }

  openUrlIn() {
    window.open('https://www.instagram.com/barberproapp/', '_system', 'location=yes');
  }

  openUrlFace() {
    window.open('https://www.facebook.com/barberproapp/', '_system', 'location=yes');
  }


}
