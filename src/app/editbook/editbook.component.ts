import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { BooksService } from '../books/books.service';
import { ToastrService } from 'ngx-toastr';
import { Books } from '../books/books.model';
declare var $:any;
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  constructor(public router:Router,public editbookService:BooksService,private toastr: ToastrService, private route: ActivatedRoute) { }

  public books:Books = new Books(); 
 

  ngOnInit():void {
    this.route.params.forEach((params: Params) => {
     let id= params['id']; 
      this.getBookDetails(id);
  });
  }
  getBookDetails(id:string)
  {
  
    this.editbookService.getBookDetails(id).subscribe(
      (response:any) => {
        this.books = response.json();
        //this.showSuccess();
        //this. clear();
         },
      (error) => {
        console.log(error);
       
      }
    )
  }

  updateBook()
    {
     
      this.editbookService.updateBook(this.books).subscribe(
        (response:any) => {
          this.toastr.success('Book edited succefully', 'Congrats');
          this.router.navigateByUrl('');
          },
        (error) => {
          console.log(error);
        
        }
      ) 
  } 
  openModal(){
   $('#myModal').modal('show');
    }
}
