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
  OnInit,
  ViewChild
} from '@angular/core';
import * as d3 from 'd3';
import {ChartService} from '../shared/chart.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements OnInit, OnChanges {

  /**
   * Obtain the settings for making the chart here and define defaults if none
   * are specified.
   */
  @Input() width = 400;
  chartWidth: number;
  @Input() height = 600;
  @Input() margins = {'top': 50, 'right': 50, 'bottom': 50, 'left': 50};
  @Input() data: {}[];
  @Input() x: string;
  @Input() y: string;
  chartHeight: number;
  chart: d3.Selection<any, any, any, any>;

  /* Get private instance of template to avoid collisions with other charts */
  @ViewChild('barchart') private chartContainer: ElementRef;

  constructor(private chartService: ChartService) {
  }

  ngOnInit() {
    /*Check if data is given if not die*/
    if (this.data == null) {
      throw new Error('Missing Data!');
    }

    this.chartWidth = this.width - this.margins.left - this.margins.right;
    this.chartHeight = this.height - this.margins.top - this.margins.bottom;

    this.chart = this.chartService.makeChartCanvas(this.chartContainer,
      this.width, this.height, this.margins);

    this.draw();
  }

  /**
   * This life cycle hook tells angular to detect any changes and to adjust
   * the chart accordingly and also serves to separate out different
   * instances of the same chart
   * */
  ngOnChanges() {
    this.chartWidth = this.width - this.margins.left - this.margins.right;
    this.chartHeight = this.height - this.margins.top - this.margins.bottom;
  }

  /**
   * This is the main method to render the bar chart it operates on the d3
   * selection supplied and appends the scales, bars to the selection.
   *
   * @param {d3.Selection} chart - A d3 selection object
   */
  private draw() {
    const xData = this.getData(this.x);
    const yData = this.getData(this.y);

    const xScale = d3.scaleBand()
      .domain(xData)
      .rangeRound([0, this.chartWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(yData)])
      .rangeRound([this.chartHeight, 0]);

    this.makeAxis('x', xScale);
    this.makeAxis('y', yScale);

    this.chart.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('width', xScale.bandwidth())
      .attr('height', d => this.chartHeight - yScale(d[this.y]))
      .attr('y', d => yScale(d[this.y]))
      .attr('x', d => xScale(d[this.x]));

  }

  /**
   * This makes the axes for the chart
   *
   * @param {string} axis - the axis type to make
   * @param {d3.Scale<any>} scale - d3 scale object to scale svg and data
   *
   */
  makeAxis(axis: string, scale): void {
    if (axis === 'x') {
      /* This is drawing the x-axis and adding a label*/
      this.chart.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${this.chartHeight})`)
        .call(d3.axisBottom(scale));

      this.chart
        .append('text')
        .attr('transform', `translate(${this.chartWidth / 2}, ${this.chartHeight + this.margins.bottom - 5})`)
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
   * This is a method to parse out the data to be visualized
   *
   * @param {string} dataElement -  data element to extract out
   *
   * @return {array} array of data
   */
  getData(dataElement: string): any[] {
    return this.data.map((d) => d[dataElement]);
  }
}
