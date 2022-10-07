import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardHomeComponent } from './dashboard-home.component';
import { DashboardHomeRoutingModule } from './dashboard-home-routing.module';

@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    DashboardHomeRoutingModule
  ], exports: [DashboardHomeComponent]
})
export class DashboardHomeModule { }
