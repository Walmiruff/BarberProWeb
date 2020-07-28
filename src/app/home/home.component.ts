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





  openUrlLinkedin() {
    window.open('https://www.linkedin.com/in/walmir-castro-83011869', '_system', 'location=yes');
  }


}
