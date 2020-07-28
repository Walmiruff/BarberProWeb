
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { ContactComponent } from './contact/contact.component';

// import { MenuComponent } from './menu/menu.component';
// import { ConfigComponent } from './config/config.component';






const routes: Routes = [
  { path: 'menu', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] }, //
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path: 'reset', loadChildren: './reset/reset.module#ResetModule' },
  { path: 'app', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'paginanaoencontrada', loadChildren: './pagina-nao-encontrada/pagina-nao-encontrada.module#PaginaNaoEncontradaModule' },
  // { path: 'menu', component: MenuComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  // { path: 'config', component: ConfigComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirecionamento
  { path: '**', redirectTo: 'paginanaoencontrada' } // pagina 404}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
