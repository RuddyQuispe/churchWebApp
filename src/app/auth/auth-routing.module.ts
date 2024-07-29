import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutTemplateComponent} from "./template/layout-template/layout-template.component";
import {SignInPageComponent} from "./pages/login-page/sign-in-page.component";
import {SignUpPageComponent} from "./pages/create-account-page/sign-up-page.component";

const routes: Routes = [
  {
    path: '', component: LayoutTemplateComponent, children: [
      {path: 'sign-in', component: SignInPageComponent},
      {path: 'sign-up', component: SignUpPageComponent},
      {path: '**', redirectTo: 'sign-in'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
