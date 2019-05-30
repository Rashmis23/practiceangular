import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Books } from '../books.model';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  public books:Books[]=new Array();
  public dataSource;
  constructor(public router:Router,public bookDetails:BooksService) { }

  ngOnInit() {
  }
  getBooks(){
    
    this.bookDetails.booksService().subscribe(
      (response:any) => {
        this.books = response.json();
        this.dataSource = this.books;
                },
      (error) => {
        console.log(error);
       
      }
    )
    
  }

}
