/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import * as d3 from 'd3';
import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class ChartService {

  makeChartCanvas(element: ElementRef, width: number, height: number, margins: {}): d3.Selection<any, any, any, any> {
    const el = element.nativeElement;

    return d3.select(el)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('class', 'chart-canvas')
      .attr('transform', `translate(${margins['left']}, ${margins['top']})`);
  }
}
