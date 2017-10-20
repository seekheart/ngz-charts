/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ScatterPlotComponent } from './scatterPlot.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ ScatterPlotComponent ],
  exports: [ ScatterPlotComponent ]
})

export class ScatterPlotModule {}
