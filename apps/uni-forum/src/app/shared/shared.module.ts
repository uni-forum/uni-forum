import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavigationBarItemComponent } from './components/navigation-bar-item/navigation-bar-item.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { A11yModule } from '@angular/cdk/a11y';
import { FeatherModule } from 'angular-feather';
import { ArrowLeft, ArrowRight, Menu, X } from 'angular-feather/icons';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BannerComponent,
    NavigationBarComponent,
    NavigationBarItemComponent,
    ButtonComponent,
    LoginComponent,
    SignUpComponent,
    CheckboxComponent
  ],
  imports: [
    A11yModule,
    CommonModule,
    RouterModule,
    FeatherModule.pick({ Menu, ArrowLeft, ArrowRight, X }),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BannerComponent,
    NavigationBarComponent,
    NavigationBarItemComponent,
    ButtonComponent,
    FeatherModule
  ]
})
export class SharedModule { }
