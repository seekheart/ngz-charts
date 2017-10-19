import { ScatterPlotComponent } from './scatterPlot.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ ScatterPlotComponent ],
  exports: [ ScatterPlotComponent ]
})

export class ScatterPlotModule {}
