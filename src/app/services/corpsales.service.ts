import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { corpsales } from 'src/app/shared/data/corpsales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorpsalesService {
  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl;

  getCorpSales() {
    return this.http.get<corpsales[]>(this.baseUrl + 'CorpSales');
  }

  addCorpSales(corpsales: any): Observable<any> {
    return this.http.post(this.baseUrl + 'CorpSales', corpsales);
  }
}
