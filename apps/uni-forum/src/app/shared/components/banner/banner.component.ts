import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'uni-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {

  /** Define the main text to display */
  @Input() header: string;

  /** Define the subtext to display */
  @Input() subheader: string;

  /** Define the background color */
  @Input() color: BannerColor = 'orange';

}

export type BannerColor = 'orange' | 'blue';
