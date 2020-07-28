import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    codigoUsuario: string;

    constructor(
        private router: Router,
        private afAuth: AngularFireAuth
    ) {
        this.afAuth.authState.subscribe(user => {
            this.codigoUsuario = user.uid;
        });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }

        if (localStorage.getItem('UserToken') != null) {
        //  if (this.codigoUsuario != null) {
            const clonedreq = req.clone({
                headers: req.headers.set(
                    //            'Authorization', 'Bearer' + this.codigoUsuario
                    'Authorization', 'Bearer' + localStorage.getItem('UserToken')
                )
            });

            return next.handle(clonedreq).pipe(tap(succ => { }, err => {
                if (err.status === 401) {
                    localStorage.removeItem('userToken');
                    //   this.afAuth.auth.signOut();
                    this.router.navigateByUrl('/login');
                }
            })
            );
        } else {
            this.router.navigateByUrl('/login');
        }


    }

}


