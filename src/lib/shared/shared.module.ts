import { ChartService } from './chart.service';
import { DataService } from './data.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [ChartService, DataService]
})

export class SharedModule {}
