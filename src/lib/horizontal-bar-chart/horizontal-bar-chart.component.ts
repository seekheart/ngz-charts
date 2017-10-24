/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import {
  Component, ElementRef, Input, OnChanges, OnDestroy, OnInit,
  ViewChild
} from '@angular/core';
import * as d3 from 'd3';
import { ChartService } from '../shared/chart.service';
import { DataService } from '../shared/data.service';
import { ToolTipService } from '../shared/tooltip.service';
import { Tooltip } from '../shared/models/tooltip';

@Component({
  selector: 'ngz-charts-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.scss']
})
export class HorizontalBarChartComponent implements OnInit, OnChanges, OnDestroy {
  /**
   * Obtain the settings for making the chart here and define defaults if none are specified.
   */
  @Input() width = 400;
  @Input() height = 400;
  @Input() margins = {'top': 80, 'right': 80, 'bottom': 80, 'left': 80};
  @Input() data: {}[];
  @Input() x: string;
  @Input() y: string;
  chartHeight: number;
  chartWidth: number;
  chart: d3.Selection<any, any, any, any>;
  xScale: d3.ScaleLinear<any, any>;
  yScale: d3.ScaleBand<any>;
  xData: number[];
  yData: string[];
  private tooltipLabels: Tooltip;
  @ViewChild('horizontalBarChart') private chartContainer: ElementRef;

  constructor(private chartService: ChartService, private dataService: DataService,
              private tooltipService: ToolTipService) {
  }

  ngOnInit() {
    /*Check if data is given if not die*/
    if (this.data == null) {
      throw new Error('Missing Data!');
    }

    this.chartWidth = this.width - this.margins.left - this.margins.right;
    this.chartHeight = this.height - this.margins.top - this.margins.bottom;

    this.tooltipLabels = new Tooltip(this.x, this.y);
    this.chart = this.chartService.makeChartCanvas(this.chartContainer, this.width,
      this.height, this.margins);

    if (this.data) {
      this.draw(this.data);
    }
  }

  /**
   * This life cycle hook tells angular to detect any changes and to adjust
   * the chart accordingly and also serves to separate out different
   * instances of the same chart
   * */
  ngOnChanges() {
    this.chartWidth = this.width - this.margins.left - this.margins.right;
    this.chartHeight = this.height - this.margins.top - this.margins.bottom;
    this.tooltipLabels = new Tooltip(this.x, this.y);
    if (this.chart && this.data) {
      this.draw(this.data);
    }
  }

  /* This life cycle hook cleans up the dom when the component is trashed */
  ngOnDestroy() {
    this.width = null;
    this.height = null;
    this.margins = null;
    this.data = null;
    this.x = null;
    this.y = null;
    this.chartHeight = null;
    this.chartWidth = null;
    this.chart = null;
    this.xScale = null;
    this.yScale = null;
    this.xData = null;
    this.yData = null;
  }

  /**
   * This makes the axes for the chart.
   *
   * @param {string} axis - the axis type to make
   * @param {object} scale - d3 scale object to scale svg and data
   *
   */
  makeAxis(axis: string, scale): void {
    if (axis === 'x') {
      /* This is drawing the x-axis and adding a label*/
      this.chart.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${this.chartHeight})`)
        .call(d3.axisBottom(scale));

      const movement = `${this.chartWidth / 2}, ${this.chartHeight + this.margins.bottom - 5}`;
      this.chart
        .append('text')
        .attr('transform', `translate(${movement})`)
        .text(`${this.x}`);
    } else if (axis === 'y') {
      /* This is drawing the y-axis and adding a label*/
      this.chart.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(scale));

      this.chart.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', `-${this.margins.left}`)
        .attr('x', `-${this.chartHeight / 2}`)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text(`${this.y}`);
    }
  }

  /**
   * This is the main method to render the bar chart it operates on the d3
   * selection supplied and appends the scales, bars to the selection.
   *
   * @param {array} dataSet - objects to draw data with
   */
  private draw(dataSet: {}[]): void {
    this.xData = this.dataService.getData(dataSet, this.x);
    this.yData = this.dataService.getData(dataSet, this.y);

    this.yScale = this.dataService.makeScale('categorical', this.yData, this.chartHeight, false);
    this.xScale = this.dataService.makeScale('linear', this.xData, this.chartWidth);

    this.makeAxis('x', this.xScale);
    this.makeAxis('y', this.yScale);

    /**
     * We draw the bars into the canvas here. For transitions, the initial height and y have to
     * be set to the bottom of the chart before rendering the actual data. We animate a rising
     * effect, the placement of the transition logic drives what actually animates.
     */
    const svg = this.chart.selectAll('.h-bar')
      .data(dataSet).enter().append('rect')
      .attr('class', 'h-bar')
      .attr('height', this.yScale.bandwidth())
      .attr('y', d => this.yScale(d[this.y]))
      .attr('x', this.xScale(0))
      .attr('width', this.xScale(0));

    svg.transition()
      .duration(800)
      .ease(d3.easeLinear)
      .attr('width', d => this.xScale(d[this.x]));

    this.tooltipService.addTooltip(svg, this.tooltipLabels, this.chartContainer);

  }


}
