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

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { EditbookComponent } from './books/editbook/editbook.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddbookComponent,
    EditbookComponent
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
    BrowserAnimationsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' 
    }),
    RouterModule.forRoot(appRoutes)
    ],
    providers: [BooksService],
  bootstrap: [AppComponent],

  
})
export class AppModule { }