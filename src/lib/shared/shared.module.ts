/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

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
