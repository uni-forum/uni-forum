import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: '[uni-button],[uni-outline-button],[uni-link-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'btn',
    '[class.btn-lg]': 'size === "large"',
    '[class.btn-sm]': 'size === "small"',
    '[class.btn-primary]': 'color === "primary"',
    '[class.btn-secondary]': 'color === "secondary"',
    '[class.btn-warning]': 'color === "warning"',
    '[class.btn-danger]': 'color === "danger"',
    '[class.btn-success]': 'color === "success"',
    '[class.btn-info]': 'color === "info"',
    '[class.btn-light]': 'color === "light"',
    '[class.btn-dark]': 'color === "dark"',
  }
})
export class ButtonComponent implements OnInit, OnDestroy {

  /** Specify the color */
  @Input() color: ButtonColor = 'dark';

  /** Specify the button size */
  @Input() size: ButtonSize;

  /** Add the appropriate class if the button is an outline */
  @HostBinding('class.btn-outline') outline: boolean = false;

  /** Add the appropriate class if the button is a link */
  @HostBinding('class.btn-link') link: boolean = false;

  constructor(
    private readonly _elementRef: ElementRef<HTMLButtonElement>,
    private readonly _focusMonitor: FocusMonitor
  ) {}

  ngOnInit(): void {
    // begin monitoring focus
    this._focusMonitor.monitor(this._elementRef.nativeElement);

    // update the properties based on the element properties
    this.outline = this._elementRef.nativeElement.hasAttribute('uni-outline-button');
    this.link = this._elementRef.nativeElement.hasAttribute('uni-link-button');
  }

  ngOnDestroy(): void {
    this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
  }

}

export type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export type ButtonSize = 'large' | 'small' | null;
