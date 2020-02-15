import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscussionsRoutingModule } from './discussions-routing.module';
import { DiscussionsComponent } from './pages/discussions/discussions.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DiscussionsComponent],
  imports: [
    CommonModule,
    DiscussionsRoutingModule,
    SharedModule
  ]
})
export class DiscussionsModule { }
