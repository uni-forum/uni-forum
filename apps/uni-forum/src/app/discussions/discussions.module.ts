import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscussionsRoutingModule } from './discussions-routing.module';
import { DiscussionsComponent } from './pages/discussions/discussions.component';
import { SharedModule } from '../shared/shared.module';
import { DiscussionComponent } from './components/discussion/discussion.component';


@NgModule({
  declarations: [DiscussionsComponent, DiscussionComponent],
  imports: [
    CommonModule,
    DiscussionsRoutingModule,
    SharedModule
  ]
})
export class DiscussionsModule { }
