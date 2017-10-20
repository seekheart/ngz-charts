import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartModule } from '../lib/barChart/barChart.module';
import { ScatterPlotModule } from '../lib/scatterPlot/scatterPlot.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BarChartModule,
    ScatterPlotModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
