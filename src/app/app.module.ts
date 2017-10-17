import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartModule } from '../lib/barchart/barchart.module';
import { ScatterplotModule } from '../lib/scatterplot/scatterplot.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BarchartModule,
    ScatterplotModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
