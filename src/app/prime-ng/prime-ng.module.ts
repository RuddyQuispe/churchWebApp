import {NgModule} from '@angular/core';
import {CardModule} from 'primeng/card'
import {DividerModule} from 'primeng/divider'
import {ToastModule} from 'primeng/toast'
import {FloatLabelModule} from 'primeng/floatlabel'
import {PasswordModule} from 'primeng/password'
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DividerModule,
    FloatLabelModule,
    PasswordModule,
    ToastModule,
    RippleModule,
  ]
})
export class PrimeNgModule {
}
