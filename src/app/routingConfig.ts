
import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './books/addbook/addbook.component';
 

export const appRoutes: Routes = [
  { path: '', 
    component: BooksComponent 
  },
  {
    path: 'add',
    component: AddbookComponent
  }
];