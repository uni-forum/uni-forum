import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'uni-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscussionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
