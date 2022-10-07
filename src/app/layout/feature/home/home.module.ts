import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

import { NavbarModule } from '../../ui/navbar/navbar.module';
import { FootbarModule } from '../../ui/footbar/footbar.module';
import { DashboardHomeModule } from 'src/app/dashboard/ui/dashboard-home/dashboard-home.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    FootbarModule,
    DashboardHomeModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
