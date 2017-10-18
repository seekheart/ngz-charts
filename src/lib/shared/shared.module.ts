import { ChartService } from './chart.service';
import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipService } from './tooltip.service';

@NgModule({
  imports: [CommonModule],
  providers: [ChartService, DataService, TooltipService]
})

export class SharedModule {
}
