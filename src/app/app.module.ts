import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HttpModule } from '@angular/http';
import { BooksService } from './books/books.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routingConfig';
import { AddbookComponent } from './books/addbook/addbook.component'; 
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { EditbookComponent } from './books/editbook/editbook.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BookdetailsComponent } from './books/bookdetails/bookdetails.component';
import {PopoverModule} from "ngx-popover";
import { DataTableModule, SharedModule, DataTable } from 'primeng/primeng';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddbookComponent,
    EditbookComponent,
    BookdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    CdkTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ToastrModule.forRoot(),
    TableModule,
    DataTableModule,
    BrowserAnimationsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' ,}),
    RouterModule.forRoot(appRoutes),
    PopoverModule,
    ModalModule.forRoot(),
    MenubarModule
 
    ],
    providers: [BooksService],
  bootstrap: [AppComponent],

  
})
export class AppModule { }