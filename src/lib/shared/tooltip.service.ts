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
   */
  addTooltip(selection: d3.Selection<any, any, any, any>, labelKeys: Tooltip, refElement: ElementRef) {
    const tooltipBoxContainer = refElement.nativeElement;
    const tooltipBox = d3.select(tooltipBoxContainer)
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    selection
      .on('mouseover', (d) => {
        const content = `${labelKeys.x}: ${d[labelKeys.x]}<br/>${labelKeys.y}: ${d[labelKeys.y]}`;
        let box;
        tooltipBox
          .transition()
          .duration(200)
          .style('opacity', 0.95);
        if (labelKeys.message !== null) {
          box = tooltipBox.html(`<p>${content}<br/>${labelKeys.message}: ${d[labelKeys.message]}</p>`);
        } else {
          box = tooltipBox.html(`<p>${content}</p>`)
        }

        box
          .style('left', `${d3.event.pageX}px`)
          .style('top', `${d3.event.pageY}px`)
          .style('position', 'absolute')
          .style('text-align', 'center')
          .style('width', '6%')
          .style('height', '4%')
          .style('padding', '10px 5px')
          .style('font-family', 'sans-serif')
          .style('color', '#fff')
          .style('background', 'lightsteelblue')
          .style('border', 0)
          .style('word-wrap', 'break-word')
          .style('white-space', 'normal')
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
