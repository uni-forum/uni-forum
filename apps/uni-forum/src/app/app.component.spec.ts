import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DialogModule } from '@angular/cdk-experimental/dialog';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        DialogModule,
        SharedModule,
        RouterModule.forRoot([])
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
