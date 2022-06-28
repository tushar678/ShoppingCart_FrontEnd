import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/books.service';
import { MenuService } from 'src/app/services/menu.service';
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
  menuList = [];
  booksBySubMenu = [];
  ITMenu = [];
  ProfMenu = [];
  subMenuSelected: any;
  
  constructor(
    private bookService: BookserviceService,
    private menuService: MenuService
    ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 1000)
    this.getAllBooks();
    this.getMenuList();
    this.getITSubMenu();
    this.getProfSubMenu();
  }

  getAllBooks(){
    this.bookService.getBooks().subscribe((data: any)=> {
      this.bookData = data;
      console.log('Bookdata', this.bookData);
    })
  }

  //menu name displayed hard-coded in HTML
  getMenuList(){
    this.menuService.getMenuList().subscribe((data: any)=> {
      this.menuList = data;
      console.log('Menu List', this.menuList);
    })
  }

  getBooksbySubMenu(){
    // to be made dynamic by selecting from dropdown
    this.subMenuSelected = 'AWS';
    this.menuService.getBooksBySubMenu(this.subMenuSelected).subscribe((data: any)=> {
      this.booksBySubMenu = data;
      console.log('Books under',this.subMenuSelected, 'are :', this.booksBySubMenu);
    })
  }

  //get sub menu list for menus hard-coded
  getITSubMenu(){
    this.menuService.getSubMenuList('IT CERTIFICATIONS').subscribe((data: any)=>{
      this.ITMenu = data;
      console.log('IT Sub Menu', this.ITMenu);
    })
  } 
  
  getProfSubMenu(){
    this.menuService.getSubMenuList('PROFESSIONAL CERTIFICATIONS').subscribe((data: any)=>{
      this.ProfMenu = data;
      console.log('Prof Sub Menu', this.ProfMenu);
    })
  }
  
  show(menu: string){
    this.subMenuSelected = menu;
    console.log("Selected sub menu", this.subMenuSelected);
    this.menuService.getBooksBySubMenu(this.subMenuSelected).subscribe((data: any)=> {
      this.bookData = data;
    })
  }

}
