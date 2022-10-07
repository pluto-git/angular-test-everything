import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutShellRoutingModule } from './layout-shell-routing.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutShellRoutingModule,
    HomeModule
  ]
})
export class LayoutShellModule { }
