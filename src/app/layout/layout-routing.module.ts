import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { MenuComponent } from './menu/menu.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'calendario', pathMatch: 'prefix' },
      { path: 'calendario', loadChildren: './menu/menu.module#MenuModule' },
      { path: 'config', loadChildren: './config/config.module#ConfigModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
