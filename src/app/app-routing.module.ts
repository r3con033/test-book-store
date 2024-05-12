import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ERoutes} from "./core/enums/routes.enum";

const routes: Routes = [
  {
    path: ERoutes.EMPTY,
    pathMatch: 'full',
    redirectTo: ERoutes.BOOKS
  },
  {
    path: ERoutes.BOOKS,
    loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule),
    //canActivateChild: [AuthGuard],
  },
  {
    path: ERoutes.AUTH,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: ERoutes.OTHER,
    redirectTo: ERoutes.EMPTY,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
