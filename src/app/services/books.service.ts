import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDetails } from 'src/app/shared/data/BookDetails';
import { ImageDetails } from 'src/app/shared/data/ImageDetails';
import { environment } from 'src/environments/environment';

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
}
