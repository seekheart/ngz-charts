import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart';
import { ChartService } from './shared/chart.service';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    ScatterplotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChartService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
