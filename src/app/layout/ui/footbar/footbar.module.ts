import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootbarComponent } from './footbar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FootbarComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    RouterModule
  ],
  exports: [FootbarComponent]
})
export class FootbarModule { }
