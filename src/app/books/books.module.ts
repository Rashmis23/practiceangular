import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import { AddbookComponent } from './addbook/addbook.component';


@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
    MatTableModule
    
  ],
  declarations: [BooksComponent,AddbookComponent]
})
export class BooksModule { }
