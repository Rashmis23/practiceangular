import { Component, OnInit, TemplateRef, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from './books.service';
import { Books } from './books.model';
import { ToastrService } from 'ngx-toastr';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


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
   public selectedId;
   modalRef: BsModalRef;
  constructor(public router:Router,public listOfBooksService:BooksService,private toastr: ToastrService,
    private modalService: BsModalService) { }

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
    deleteBooks(id:string) {
      
        this.listOfBooksService.deleteBook(this.selectedId).subscribe(
          (response:any)=> {
           this.getBooks();
           this.modalRef.hide()
           this.showDelete(); 
          },
    
        );
    }
    openModal(template: TemplateRef<any>,id:String) {
      this.selectedId=id;
      this.modalRef = this.modalService.show(template);
    }

}