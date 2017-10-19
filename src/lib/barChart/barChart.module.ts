import { BarChartComponent } from './barChart.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [
    BarChartComponent,
  ],
  exports: [
    BarChartComponent
  ]
})

export class BarChartModule {}
