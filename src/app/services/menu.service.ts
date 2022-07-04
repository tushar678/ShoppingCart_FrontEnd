import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  getMenuList(){
    return this.http.get(this.baseUrl + 'Menus/GetMenus');
  }

  getSubMenuList(name: string){
    return this.http.get(this.baseUrl + 'Menus/GetSubMenuByName?name=' + name);
  }

  getBooksBySubMenu(name: string){
    return this.http.get(this.baseUrl + 'Menus/GetBooksBySubMenu?menu=' + name);
  }
}
