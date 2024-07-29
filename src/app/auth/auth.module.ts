import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import { LayoutTemplateComponent } from './template/layout-template/layout-template.component';
import { SignInPageComponent } from './pages/login-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/create-account-page/sign-up-page.component';


@NgModule({
  declarations: [
    LayoutTemplateComponent,
    SignInPageComponent,
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeNgModule
  ]
})
export class AuthModule { }
