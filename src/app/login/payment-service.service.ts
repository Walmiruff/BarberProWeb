import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { switchMap, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  userId: string;
  plan: string;
  membership: any;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.membership = this.afAuth.authState
      .pipe(
        tap(user => this.userId = user.uid),
        switchMap(user => {
          return (this.db.object(`users/${user.uid}/pro-membership`)).valueChanges();
        })
      );
  }



  processPayment(token: any, uid: string, lang: string) {
    this.userId = uid;

  if (lang === 'pt-BR') {
    this.plan = 'plan_EtApG9sgJaXnnW';
  } else if (lang === 'pt' || lang === 'de' || lang === 'es' || lang === 'fr' || lang === 'it') {
    this.plan = 'plan_EtAn2S0vVAAgn7';
  } else {
    this.plan = 'plan_EtAkL5tX4sQYCs';
  }
    return this.db.object(`/users/${this.userId}/pro-membership`).update({ token: token.id, plan: this.plan});
  }
}
