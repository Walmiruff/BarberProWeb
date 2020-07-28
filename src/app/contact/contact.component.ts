import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private translate: TranslateService) {
    this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

}
