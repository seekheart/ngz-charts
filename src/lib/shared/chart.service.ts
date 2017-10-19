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

  /**
   * Method to provide a chart canvas for d3 to operate on
   *
   * @param {ElementRef} element - reference html element to act on from template
   * @param {number} width - width to make canvas in pixels
   * @param {number} height - height to make canvas in pixels
   * @param {object} margins - margins object to provide padding for drawing graph
   *
   * @return {object} d3 selection object to act on for drawing charts
   */
  makeChartCanvas(element: ElementRef, width: number,
                  height: number, margins: {}): d3.Selection<any, any, any, any> {
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
