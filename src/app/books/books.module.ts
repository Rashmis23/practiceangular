import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';


@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
    MatTableModule
    
  ],
  declarations: [BooksComponent,AddbookComponent, EditbookComponent, BookdetailsComponent]
})
export class BooksModule { }
