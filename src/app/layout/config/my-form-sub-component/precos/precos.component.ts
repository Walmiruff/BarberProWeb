import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrls: ['./precos.component.css']
})
export class PrecosComponent implements OnInit {


  @Input () myFormPrecos: FormGroup;
  constructor( private translate: TranslateService) {
    this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

}
