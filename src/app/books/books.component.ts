import { Component, OnInit, TemplateRef, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from './books.service';
import { Books } from './books.model';
<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
import { MenubarModule, MenuItem } from 'primeng/primeng';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
=======
import { ToastrModule, ToastrService } from 'ngx-toastr';

>>>>>>> 6663706d08ec555d9cc020fe3247a5b9efd94a33


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
<<<<<<< HEAD
   public selectedId;
   modalRef: BsModalRef;
  
  constructor(public router:Router,public listOfBooksService:BooksService,private toastr: ToastrService,
    private modalService: BsModalService) { }
    items: MenuItem[];
  ngOnInit():void {
    this.getBooks();
    
    this.items = [
      {
          label: 'Home',
          icon: 'fa fa-home',
          items: [
              {label: 'Open'},
              {label: 'Logout'}
          ]
      },
      {
          label: 'Users',
          icon: 'fa fa-user',
          items: [
            {label: 'Add User', icon: 'pi pi-fw pi-plus'},
              {label: 'Delete', icon: 'pi pi-fw pi-trash'}
             
          ]
      },
      {
        label: 'Machine',
        icon: 'pi pi-fw pi-list',
        items: [
          {label: 'All Machines', icon: 'fa fa-jcb'},
            {label: 'Pending for Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Pending for Activation', icon: 'fa fa-address-card-o'},
            {label: 'Pending for GPS Installation', icon: 'fa fa-map-marker'},
            {label: 'Pending for Rates', icon: 'fa fa-inr'},
            {label: 'Ready to go', icon: 'fa fa-check'},
            {label: 'On Rent', icon: 'fa fa-lock'},
           
        ]
    },
    {
      label: 'Contracts',
      icon: 'fa fa-file-text custom',
      items: [
        {label: 'Payement Pending', icon: 'fa fa-inr'},
          {label: 'Attenstion Needed', icon: 'fa fa-warning'},
          {label: 'Idle Contracts', icon: 'fa fa-clock-o'},
          {label: 'Reaching Hire Rate', icon: 'fa fa-calendar'},
      ]
  }
  ];
}

=======
   public deleteId;

  constructor(public router:Router,public listOfBooksService:BooksService,private toastr: ToastrService) { }

  ngOnInit():void {
    this.getBooks();
  } 
>>>>>>> 6663706d08ec555d9cc020fe3247a5b9efd94a33
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
<<<<<<< HEAD
    deleteBooks(id:string) {
      
        this.listOfBooksService.deleteBook(this.selectedId).subscribe(
          (response:any)=> {
           this.getBooks();
           this.modalRef.hide()
=======
    clickMethod(id:string) {
      if(confirm("Are you sure to delete "+name)) {
        this.listOfBooksService.deleteBook(id).subscribe(
          (response:any)=> {
           this.getBooks();
>>>>>>> 6663706d08ec555d9cc020fe3247a5b9efd94a33
           this.showDelete(); 
          },
    
        );
<<<<<<< HEAD
     
    }

    openModal(template: TemplateRef<any>,id:String) {
      this.selectedId=id;
      this.modalRef = this.modalService.show(template);
=======
      }
>>>>>>> 6663706d08ec555d9cc020fe3247a5b9efd94a33
    }

}