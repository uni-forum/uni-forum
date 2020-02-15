import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'uni-navigation-bar-item',
  templateUrl: './navigation-bar-item.component.html',
  styleUrls: ['./navigation-bar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarItemComponent implements OnInit, OnDestroy {

  constructor(
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _focusMonitor: FocusMonitor
  ) {}

  ngOnInit(): void {
    this._focusMonitor.monitor(this._elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
  }
}
