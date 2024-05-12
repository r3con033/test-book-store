import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {ERoutes} from "../../core/enums/routes.enum";

import {LoginComponent} from './components/login/login.component';
import {AuthComponent} from './auth.component';

const routes: Routes = [{
  path: ERoutes.EMPTY,
  component: AuthComponent,
}];

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule {
}
