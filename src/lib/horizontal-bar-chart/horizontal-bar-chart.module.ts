/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { NgModule } from '@angular/core';
import { HorizontalBarChartComponent } from './horizontal-bar-chart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HorizontalBarChartComponent],
  exports: [HorizontalBarChartComponent]
})
export class HorizontalBarChartModule { }
