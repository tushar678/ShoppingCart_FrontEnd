import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WishListItem } from '../shared/data/WishListItem';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
  baseUrl = environment.baseUrl;

  getWishListItem(route:string){
    return this.http.get<WishListItem[]>(this.baseUrl+route)
  }

}
