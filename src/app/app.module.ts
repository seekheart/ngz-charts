import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartModule } from '../lib/barChart/barChart.module';
import { ScatterPlotModule } from '../lib/scatterPlot/scatterPlot.module';
import { HorizontalBarChartModule } from '../lib/horizontal-bar-chart/horizontal-bar-chart.module';
import { TimelineModule } from '../lib/timeline/timeline.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BarChartModule,
    ScatterPlotModule,
    HorizontalBarChartModule,
    TimelineModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
