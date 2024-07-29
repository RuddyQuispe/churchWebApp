import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import localeEsBo from '@angular/common/locales/es-BO';
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEsBo);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-BO'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
