import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from './books.service';
import { Books } from './books.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';



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
   ['id','book_name', 'author', 'isbn', 'publish_year','action'];
   public deleteId;

  constructor(public router:Router,public listOfBooksService:BooksService,private toastr: ToastrService) { }

  ngOnInit():void {
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

    showDelete() {
      this.toastr.warning('Book deleted succefully', 'Deleted');
    }
    clickMethod(id:string) {
      if(confirm("Are you sure to delete "+name)) {
        this.listOfBooksService.deleteBook(id).subscribe(
          (response:any)=> {
           this.getBooks();
           this.showDelete(); 
          },
    
        );
      }
    }

}
