import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Books } from '../books.model';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
  
})
export class AddbookComponent implements OnInit {
  

  constructor(public router:Router,public addbookService:BooksService,private toastr: ToastrService) {

   }
   public books:Books = new Books(); 

  addbook:FormGroup;
  private book: Books;


  ngOnInit():void {
    
  }

  savedBook(){
  
    this.addbookService.savedBook(this.books).subscribe(
      (response:any) => {
        this.router.navigateByUrl('');
        this.toastr.success('Book added succefully', 'Congrats');
         },
      (error) => {
        console.log(error);
       
      }
    )
    
    }
    cancel()
    {
      this.books.book_name="";
      this.books.author="";
      this.books.isbn="";
      this.books.publish_year="";
      this.router.navigateByUrl('');
    }

    clear()
    {
      this.books.book_name="";
      this.books.author="";
      this.books.isbn="";
      this.books.publish_year="";
      this.router.navigateByUrl('/add');
    }
    errorMessage(){

    }
  
    
}
