import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { UserService } from '../services/user.service';


@NgModule({
  declarations: [
    AddToCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  providers:[UserService]
})
export class CartModule { }
