import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Books } from '../books.model';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  

  constructor(public router:Router,public addbookService:BooksService) {

   }
   public books:Books = new Books(); 

  addbook:FormGroup;
  private book: Books;


  ngOnInit():void {
    
  }

  savedBook(){
   
    this.addbookService.savedBook(this.books).subscribe(
      (response:any) => {
        this.router.navigateByUrl('/add');
         },
      (error) => {
        console.log(error);
       
      }
    )
    
    }
}
