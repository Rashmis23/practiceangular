import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';
import { Books } from './books.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class BooksService {
public books:Books[]=new Array();
public data;
 
  constructor(private http:Http) {
  }
booksService(){
  return this.http.get(environment.servicesURL+'allbooks');
}
savedBook(Books){
  return this.http.post(environment.servicesURL+'/addbook',Books);
}
deleteBook(Books){
  return this.http.delete(environment.servicesURL+'deleteBook/'+Books.id);
}

  
}
