/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { ChartService } from '../shared/chart.service';

@Component({
  selector: 'ng-charts-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.scss']
})
export class ScatterplotComponent implements OnInit {

  /**
   * Setup the chart properties and define defaults if none are specified
   */
  @Input() width = 400;
  @Input() height = 600;
  @Input() margins = {'top': 50, 'right': 50, 'bottom': 50, 'left': 50};
  @Input() data: {}[];
  @Input() x: string;
  @Input() y: string;
  chartHeight: number;
  chartWidth: number;
  chart: d3.Selection<any, any, any, any>;
  xScale: d3.ScaleLinear<number, any>;
  yScale: d3.ScaleLinear<number, any>;
  xData: number[];
  yData: number[];
  dataPointShape: string; // TODO change this to use enum as options


  /*Get a reference of a particular instance of the component's template*/
  @ViewChild('scatterplot') chartContainer: ElementRef;

  constructor(private chartService: ChartService) {
  }

  ngOnInit() {
    if (this.data === null) {
      throw new Error('No Data supplied!!');
    }

    this.chartWidth = this.width - this.margins.left - this.margins.right;
    this.chartHeight = this.height - this.margins.top - this.margins.bottom;

    this.chart = this.chartService.makeChartCanvas(this.chartContainer, this.width,
      this.height, this.margins);

    if (this.data) {
      this.draw(this.data);
    }
  }

  /**
   * Main function to draw the scatterplot, it requires a dataset in order to draw
   * on the reference element supplied from view child
   */
  private draw(dataSet: {}[]): void {

  }

}