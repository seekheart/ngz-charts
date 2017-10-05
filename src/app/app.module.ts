import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart';
import { ChartService } from './shared/chart.service';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
