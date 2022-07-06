import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpsalesComponent } from '../corpsales/corpsales.component';
import { EnquiryComponent } from './enquiry/enquiry.component';

const routes: Routes = [
  {
    path: 'corpsales',
    component: CorpsalesComponent
  },
  {
    path: 'enquiry',
    component: EnquiryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorpSalesRoutingModule {}
