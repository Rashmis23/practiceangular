import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Books } from '../books.model';
import { FormGroup } from '@angular/forms';
<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
=======
import { ToastrModule, ToastrService } from 'ngx-toastr';
>>>>>>> 6663706d08ec555d9cc020fe3247a5b9efd94a33


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
  
})
export class AddbookComponent implements OnInit {
  

  constructor(public router:Router,public addbookService:BooksService,private toastr: ToastrService) {

   }
   public books:Books = new Books(); 

  
  ngOnInit():void {
    
  }

  savedBook(){
  
    this.addbookService.savedBook(this.books).subscribe(
      (response:any) => {
        this.router.navigateByUrl('');
<<<<<<< HEAD
        this.toastr.success('Book added succefully', 'Congrats');
=======
        this.showSuccess();
        this. clear();
>>>>>>> 6663706d08ec555d9cc020fe3247a5b9efd94a33
         },
      (error) => {
        console.log(error);
       
      }
    )
    
    }
<<<<<<< HEAD
    cancel()
    {
      this.books.book_name="";
      this.books.author="";
      this.books.isbn="";
      this.books.publish_year="";
      this.router.navigateByUrl('');
    }

=======
    cancel(){
      
    }
>>>>>>> 6663706d08ec555d9cc020fe3247a5b9efd94a33
    clear()
    {
      this.books.book_name="";
      this.books.author="";
      this.books.isbn="";
<<<<<<< HEAD
      this.books.publish_year="";
      this.router.navigateByUrl('/add');
    }
    errorMessage(){

    }
  
    
=======
      this.books.publish_year=null;
    }
    showSuccess() {
      this.toastr.success('Book added succefully', 'Congrats');
    }
>>>>>>> 6663706d08ec555d9cc020fe3247a5b9efd94a33
}
