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
savedBook(books){
  return this.http.post(environment.servicesURL+'/addbook',books);
}
deleteBook(id:string){
  //alert(environment.servicesURL+'deleteBook/'+id);
  return this.http.delete(environment.servicesURL+'deleteBook/'+id);
<<<<<<< HEAD
}
updateBook(books:any){
  return this.http.put(environment.servicesURL+'updateBook',books);
}
getBookDetails(id:string){
  return this.http.get(environment.servicesURL+'books/'+id);
=======
}
updateBook(books){
  return this.http.put(environment.servicesURL+'updateBook',books);
}
getBookDetails(id:string){
  return this.http.get(environment.servicesURL+'books/'+id);
}
>>>>>>> 6663706d08ec555d9cc020fe3247a5b9efd94a33
}
}