import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCardComponent } from './basic-card/basic-card.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [BasicCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports:[BasicCardComponent]
})
export class SharedModule { }
