import {BarchartComponent} from './barchart.component';
import {ChartService} from '../shared/chart.service';
import {DataService} from '../shared/data.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [
    BarchartComponent,
  ],
  exports: [
    BarchartComponent
  ]
})

export class BarchartModule {}
