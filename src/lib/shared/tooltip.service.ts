/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ElementRef, Injectable } from '@angular/core';
import * as d3 from 'd3';
import { Selection } from 'd3';
import { Tooltip } from './models/tooltip';

@Injectable()
export class ToolTipService {

  /**
   * A method to add tooltips to a d3 selection object, tooltip will show x, y datapoints and
   * any meta data mentioned in message property
   *
   * @param {d3.Selection<any, any, any, any>} selection - d3 selection with data being drawn on
   * @param {Tooltip} labelKeys -Tooltip model telling the service what keys to use to extract datum
   * @param {ElementRef} refElement - Reference to the component DOM template that svg is working on
   *
   * @return {d3.Selection<any, any, any, any>} d3 selection with tooltip applied
   */
  addTooltip(selection: d3.Selection<any, any, any, any>, labelKeys: Tooltip,
             refElement: ElementRef): d3.Selection<any, any, any, any> {
    const tooltipBoxContainer = refElement.nativeElement;
    const tooltipBox = d3.select(tooltipBoxContainer)
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    return selection
      .on('mouseover', (d) => {
        const content = `${labelKeys.x}: ${d[labelKeys.x]}<br/>${labelKeys.y}: ${d[labelKeys.y]}`;
        let box;
        tooltipBox
          .transition()
          .duration(200)
          .style('opacity', 0.95);
        if (labelKeys.message !== null) {
          const message = `${labelKeys.message}: ${d[labelKeys.message]}`;
          box = tooltipBox.html(`<p>${content}<br/>${message}</p>`);
        } else {
          box = tooltipBox.html(`<p>${content}</p>`);
        }

        box
          .style('left', `${d3.event.pageX}px`)
          .style('top', `${d3.event.pageY}px`)
          .style('position', 'absolute')
          .style('text-align', 'center')
          .style('width', '6%')
          .style('height', '8%')
          .style('padding', '5px')
          .style('line-height', 1)
          .style('font-family', 'sans-serif')
          .style('font-size', '1em')
          .style('color', '#fff')
          .style('background', 'lightsteelblue')
          .style('border', 0)
          .style('word-wrap', 'break-word')
          .style('overflow', 'hidden')
          .style('border-radius', '8px')
          .style('pointer-events', 'none');
      })
      .on('mouseout', (d) => {
        tooltipBox.transition()
          .duration(500)
          .style('opacity', 0);
      });
  }
}
