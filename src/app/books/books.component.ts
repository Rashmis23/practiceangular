import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from './books.service';
import { Books } from './books.model';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[BooksService]
})
export class BooksComponent implements OnInit {
  public books:Books[]=new Array();
  public dataSource;
  public displayedColumns: string[] =
   ['id','book_name', 'author', 'isbn', 'publish_year','actionsColumn'];
   public deleteId;

  constructor(public router:Router,public listOfBooksService:BooksService) { }

  ngOnInit() {
   
    this.getBooks();
    
  } 
  getBooks(){
    
    this.listOfBooksService.booksService().subscribe(
      (response:any) => {
        this.books = response.json();
        this.dataSource = this.books;
                },
      (error) => {
        console.log(error);
       
      }
    )
    
  }

  deleteBook(id: String): void {
    id=this.deleteId;
    this.listOfBooksService.deleteBook(this.deleteId)
      .subscribe( data => {
        this.getBooks();
      })
  }; 

}
