import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {BooksComponent} from './books.component';
import {BooksListComponent} from './components/books-list/books-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

const routes: Routes = [{
  path: '',
  component: BooksComponent,
}];

@NgModule({
  declarations: [
    BooksComponent,
    BooksListComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BooksModule {
}
