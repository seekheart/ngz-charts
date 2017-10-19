import { ChartService } from './chart.service';
import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolTipService } from './tooltip.service';

@NgModule({
  imports: [CommonModule],
  providers: [ChartService, DataService, ToolTipService]
})

export class SharedModule {
}
