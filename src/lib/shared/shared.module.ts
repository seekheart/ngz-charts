import { ChartService } from './chart.service';
import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  providers: [ChartService, DataService]
})

export class SharedModule {
}
