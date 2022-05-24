import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

@NgModule({
  exports: [
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StartPageModule {}