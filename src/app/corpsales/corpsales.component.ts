import { Component, OnInit } from '@angular/core';
import { CorpsalesService } from 'src/app/services/corpsales.service';

@Component({
  selector: 'app-corpsales',
  templateUrl: './corpsales.component.html',
  styleUrls: ['./corpsales.component.scss']
})
export class CorpsalesComponent implements OnInit {
  public corpsales: any;
  constructor(private corpsale: CorpsalesService) {}

  ngOnInit(): void {
    this.getCorpSales();
  }

  getCorpSales(): void {
    this.corpsale.getCorpSales().subscribe(data => {
      this.corpsales = data;
      console.log(this.corpsales);
    });
  }
}
