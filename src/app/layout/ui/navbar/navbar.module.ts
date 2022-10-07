import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';


import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    RouterModule
  ],
  exports: [NavbarComponent],
})

export class NavbarModule { }