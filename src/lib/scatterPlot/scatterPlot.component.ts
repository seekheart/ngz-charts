/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import * as d3 from 'd3';
import { ChartService } from '../shared/chart.service';
import { ScatterplotOptions } from './ScatterPlotOptions';
import { DataService } from '../shared/data.service';
import { ToolTipService } from '../shared/tooltip.service';
import { Tooltip } from '../shared/models/tooltip';

@Component({
  selector: 'ngz-charts-scatterplot',
  templateUrl: './scatterPlot.component.html',
  styleUrls: ['./scatterPlot.component.scss']
})
export class ScatterPlotComponent implements OnInit, OnChanges, OnDestroy {

  /**
   * Setup the chart properties and define defaults if none are specified
   */
  @Input() width = 600;
  @Input() height = 600;
  @Input() margins = {'top': 50, 'right': 50, 'bottom': 50, 'left': 50};
  @Input() data: {}[];
  @Input() x: string;
  @Input() y: string;
  @Input() dotSize = 5;
  @Input() dataPointShape: ScatterplotOptions = 'circle';
  chartHeight: number;
  chartWidth: number;
  chart: d3.Selection<any, any, any, any>;
  xScale: d3.ScaleLinear<number, any>;
  yScale: d3.ScaleLinear<number, any>;
  xData: number[];
  yData: number[];
  private tooltipLabels: Tooltip;


  /*Get a reference of a particular instance of the component's template*/
  @ViewChild('scatterPlot') chartContainer: ElementRef;

  constructor(private chartService: ChartService, private dataService: DataService,
              private  tooltipService: ToolTipService) {
  }

  ngOnInit() {
    if (this.data === null) {
      throw new Error('No Data supplied!!');
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
   * Main function to draw the scatter plot, it requires a dataset in order to draw
   * on the reference element supplied from view child
   *
   * @param{Array<object>} dataSet - data objects in an array.
   */
  private draw(dataSet: {}[]): void {
    this.xData = this.dataService.getData(dataSet, this.x);
    this.yData = this.dataService.getData(dataSet, this.y);

    this.xScale = this.dataService.makeScale('linear', this.xData, this.chartWidth);
    this.yScale = this.dataService.makeScale('linear', this.yData, this.chartHeight);

    this.makeAxis('x', this.xScale);
    this.makeAxis('y', this.yScale);

    const svg = this.chart.selectAll('.scatter-plot-data')
      .data(dataSet)
      .enter()
      .append(this.dataPointShape)
      .attr('class', 'scatter-plot-data')
      .attr('r', this.dotSize)
      .attr('cx', (d) => this.xScale(d[this.x]))
      .attr('cy', (d) => this.yScale(d[this.y]));

    this.tooltipService.addTooltip(svg, this.tooltipLabels, this.chartContainer);
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
        .attr('transform', `translate()`)
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

}
