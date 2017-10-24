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
import { Tooltip } from '../shared/models/tooltip';
import { ChartService } from '../shared/chart.service';
import { DataService } from '../shared/data.service';
import { ToolTipService } from '../shared/tooltip.service';

@Component({
  selector: 'ngz-charts-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnChanges, OnDestroy {
  /**
   * Obtain the settings for making the chart here and define defaults if none are specified.
   */
  @Input() width = 800;
  @Input() height = 400;
  @Input() margins = {'top': 60, 'right': 60, 'bottom': 60, 'left': 60};
  @Input() data: {}[];
  @Input() dateLabel: string;
  @Input() dateEvent: string;
  chartHeight: number;
  chartWidth: number;
  chart: d3.Selection<any, any, any, any>;
  timeScale: d3.ScaleTime<any, any>;
  timeData: any[];
  private tooltipLabels: Tooltip;

  /* Get private instance of template to avoid collision with other charts */
  @ViewChild('timeline') private chartContainer: ElementRef;

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

    this.tooltipLabels = new Tooltip(this.dateLabel, this.dateEvent);
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
   */
  ngOnChanges() {
    this.chartWidth = this.width - this.margins.left - this.margins.right;
    this.chartHeight = this.height - this.margins.top - this.margins.bottom;
    this.tooltipLabels = new Tooltip(this.dateLabel, this.dateEvent);
    if (this.chart && this.data) {
      this.draw(this.data);
    }
  }

  ngOnDestroy() {
    this.width = null;
    this.height = null;
    this.margins = null;
    this.data = null;
    this.dateLabel = null;
    this.dateEvent = null;
    this.chartHeight = null;
    this.chartWidth = null;
    this.chart = null;
    this.data = null;
    this.timeScale = null;
  }

  /**
   * This makes the timeline axes
   *
   * @param {d3.ScaleTime<any, any>} scale - d3 time scale
   */
  makeTimeAxis(scale: d3.ScaleTime<any, any>): void {
    this.chart
      .append('g')
      .attr('class', 'time-axis')
      .attr('transform', `translate(0, ${this.chartHeight / 2})`)
      .call(d3.axisBottom(scale).tickFormat(d3.timeFormat('%m/%d/%Y')));

    const axisLabelPos = `${this.chartWidth / 2}, ${this.chartHeight - this.margins.bottom}`;
    this.chart
      .append('text')
      .attr('transform', `translate(${axisLabelPos})`)
      .text(`${this.dateLabel}`);
  }

  /**
   * This is the main method to render the bar chart it operates on the d3
   * selection supplied and appends the scales, bars to the selection.
   *
   * @param {array} dataSet - objects to draw data with
   */
  private draw(dataSet: {}[]): void {
    this.timeData = this.dataService.getData(dataSet, this.dateLabel);

    this.timeScale = this.dataService.makeScale('time', this.timeData, this.chartWidth);

    this.makeTimeAxis(this.timeScale);

    /**
     * We draw the bars into the canvas here. For transitions, the initial height and y have to
     * be set to the bottom of the chart before rendering the actual data. We animate a rising
     * effect, the placement of the transition logic drives what actually animates.
     */
    const svg = this.chart.selectAll('.bar')
      .data(dataSet)
      .enter()
      .append('circle')
      .attr('class', 'time-point')
      .attr('r', 8)
      .attr('cx', d => this.timeScale(d[this.dateLabel]))
      .attr('cy', `${this.chartHeight / 2}`);

    this.tooltipService.addTooltip(svg, this.tooltipLabels, this.chartContainer);
  }

}
