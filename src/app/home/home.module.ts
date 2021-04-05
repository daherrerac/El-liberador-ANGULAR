import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { SectionTypePersonComponent } from './section-type-person/section-type-person.component';
import { SectionPaymentsComponent } from './section-payments/section-payments.component';
import { BannerHomeComponent } from './banner/banner-home/banner-home.component';

@NgModule({
  declarations: [HomeComponent, HomeInfoComponent, SectionTypePersonComponent, SectionPaymentsComponent, BannerHomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
