import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  codigoUsuario: string;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      this.codigoUsuario = user.uid;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso();
  }

  canLoad( route: Route ): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso();
  }

  verificarAcesso() {
    if (this.codigoUsuario) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }
}
