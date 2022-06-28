import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/Books/books.service';
import { BookDetails } from 'src/app/shared/data/BookDetails';
import { productsDB } from '../../shared/data/products';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products = [];
  bookData:BookDetails[] = [];
  
  constructor(private bookService: BookserviceService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 1000)
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getBooks().subscribe((data: any)=> {
      this.bookData = data;
      console.log(this.bookData);
    })
  }
}
