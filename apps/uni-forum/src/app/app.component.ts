import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Dialog } from '@angular/cdk-experimental/dialog';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';

@Component({
  selector: 'uni-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private _dialog: Dialog) {
  }

  showLogin(): void {

  }

  showSignUp(): void {
    const modalRef = this._dialog.openFromComponent(SignUpComponent, {
      panelClass: 'modal-content',
      maxWidth: 500
    });

  }

}
