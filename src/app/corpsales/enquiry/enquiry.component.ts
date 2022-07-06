import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CorpsalesService } from 'src/app/services/corpsales.service';
import { corpsales } from 'src/app/shared/data/corpsales';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {
  public corpForm: FormGroup;
  public corpsale: corpsales;

  constructor(private formBuidler: FormBuilder, private corpsalesService: CorpsalesService) {}

  ngOnInit(): void {
    this.init();
    this.saveCorpSales();
  }

  public saveCorpSales(): void {
    this.corpsalesService.addCorpSales(this.corpForm.value).subscribe(result => {
      alert(`New Enquiry added`);
    });
  }

  private init(): void {
    this.corpForm = this.formBuidler.group({
      firstName: [],
      lastName: [],
      phone: [],
      email: [],
      companyName: [],
      state: [],
      country: [],
      purpose: [],
      details: []
    });
  }
}
