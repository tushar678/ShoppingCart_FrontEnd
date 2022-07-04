import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpsalesComponent } from '../corpsales/corpsales.component';

const routes: Routes = [
  {
    path: 'corpsales',
    component: CorpsalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorpSalesRoutingModule {}
