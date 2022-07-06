import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgParticlesModule } from 'ng-particles';
import { CorpSalesRoutingModule } from './corpsales-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CorpsalesComponent } from 'src/app/corpsales/corpsales.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CorpsalesComponent, EnquiryComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    NgParticlesModule,
    NgxSkeletonLoaderModule,
    CorpSalesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CorpsalesModule {}
