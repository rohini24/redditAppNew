import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCardComponent } from './basic-card/basic-card.component';
import {MatCardModule} from '@angular/material';
import { NestedCommentsComponent } from './nested-comments/nested-comments.component';

@NgModule({
  declarations: [BasicCardComponent,NestedCommentsComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports:[BasicCardComponent, NestedCommentsComponent]
})
export class SharedModule { }
