import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDetails } from 'src/app/shared/data/BookDetails';
import { ImageDetails } from 'src/app/shared/data/ImageDetails';
import { environment } from 'src/environments/environment';
import { addWishlist } from '../shared/data/addWishlist';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  getBooks(){
    return this.http.get<BookDetails[]>(this.baseUrl + 'Books');
  }
  getImageById(route:string){
    return this.http.get<ImageDetails[]>(this.baseUrl+route)
  }
  getBookById(route:string){
    debugger;
    return this.http.get<BookDetails>(this.baseUrl+route)
  }
  addBooktowishlist(route:string,addWishlist:addWishlist){
    debugger;
    return this.http.post<addWishlist>(this.CreateCompleteRoute(route,this.baseUrl),addWishlist, this.generateHeaders() );
    // return this.http.post<addWishlist>((this.baseUrl+route),addWishlist,this.generateHeaders())
  }
  private CreateCompleteRoute=(route:string,envAddress:string)=>{
    return `${envAddress}${route}`;
  }
  private generateHeaders=()=>{
    return {
      headers:new HttpHeaders({'content-Type':'application/json'})
   }
  
 }
}
