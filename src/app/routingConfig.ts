import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './books/addbook/addbook.component';
<<<<<<< HEAD
import { EditbookComponent } from './books/editbook/editbook.component';

=======
import { EditbookComponent } from './editbook/editbook.component';
>>>>>>> 6663706d08ec555d9cc020fe3247a5b9efd94a33
 

export const appRoutes: Routes = [
  { path: '', 
    component: BooksComponent 
  },
  {
    path: 'add',
    component: AddbookComponent
  },
  {
    path: 'edit/:id',
    component: EditbookComponent
  }
];