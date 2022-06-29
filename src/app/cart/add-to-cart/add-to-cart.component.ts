import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
productList:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.UserProductList();
  }
UserProductList(){
  let userId=1;
  this.userService.GetItemToCart(userId).subscribe(
     
    data => {
      debugger
      this.productList=data;
    },
    error => {
    }
  )
}
}
