import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartModule } from '../lib/barchart/barchart.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BarchartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
