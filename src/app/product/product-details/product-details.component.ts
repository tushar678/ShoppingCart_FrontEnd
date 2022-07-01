import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { GalleryItem,ImageItem  } from 'ng-gallery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router,ActivatedRoute } from '@angular/router';
import { ImageDetails } from 'src/app/shared/data/ImageDetails';
import { BookDetails } from 'src/app/shared/data/BookDetails';
import { BookserviceService } from 'src/app/services/books.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  
  
})
export class ProductDetailsComponent implements OnInit {
  imageDetails:ImageDetails[] = [];
  bookDetails:BookDetails;
  discount:number;
  perDiscount:number;
  showDiscountValue: boolean = false;
 // images: GalleryItem[];
 ItemId:any;
 result:any;
  constructor(private _http:HttpClient,private activateRoute:ActivatedRoute,
    private bookService:BookserviceService,private route:Router,private userService:UserService) { }

  ngOnInit() {
    this.ItemId = this.activateRoute.snapshot.paramMap.get('id');
   //this.getBookImageById();
    this.bookDetailById();
    
    
  }

  getBookImageById(){
    debugger;   
    const id = this.activateRoute.snapshot.paramMap.get('id');
    const apiUrl:string=`books/GetBookImage?bookid=${id}`;

    this.bookService.getImageById(apiUrl).subscribe((data:any)=>{
      this.imageDetails=data;
      console.log(this.imageDetails);   
    })
   

  }
  bookDetailById(){
    debugger;   
    const id = this.activateRoute.snapshot.paramMap.get('id');
    const apiUrl:string=`books/GetBookById?id=${id}`;

    this.bookService.getBookById(apiUrl).subscribe((data:any)=>{
      this.bookDetails=data;
      console.log(this.bookDetails);  
      if(this.bookDetails.listPrice != this.bookDetails.ourPrice){
        this.showDiscountValue = true;
      }
      this.discount=this.bookDetails.listPrice-this.bookDetails.ourPrice
      this.perDiscount=Math.round((this.discount/this.bookDetails.listPrice)*100);
    
  })

}
AddToCart(){
  var id=this.ItemId;
  const Item = {
    BookId:this.ItemId,
    UserId: 1,
    Quantity:1,
    CartTotal:this.bookDetails.ourPrice,
    DiscountPer:0,
    NetPay:this.bookDetails.ourPrice,

  };
  //this.route.navigate(['/cart'],this.ItemId);
 this.userService.AddToCart(Item).subscribe(
     
  data => {
    debugger
    this.result=data;
    this.route.navigate(['/cart']);
   // this.route.navigate(['/cart'],{state : {data : {id}}})
  },
  error => {
  }
)
  
}
}
