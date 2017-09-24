import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements OnInit {

  /* Get private instance of template to avoid collisions with other charts*/
  @ViewChild('barchart') private chartContainer: ElementRef;

  /**
   * Obtain the settings for making the chart here and define defaults if none
   * are specified
   * */
  @Input() width = 400;
  @Input() height = 600;
  @Input() margins = {'top': 50, 'right': 50, 'bottom': 50, 'left': 50};
  @Input() data: {}[];
  @Input() x: string;
  @Input() y: string;
  chartWidth: number;
  chartHeight: number;

  constructor() {
  }

  ngOnInit() {

    /*Check if data is given if not die*/
    if (this.data == null) {
      throw new Error('Missing Data!');
    }
    const chart = this.makeChart();

    this.draw(chart);
  }

  draw(chart) {
    const xData = this.getData('x');
    const yData = this.getData('y');

    const xScale = d3.scaleBand()
      .domain(xData)
      .range([0, this.chartWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(yData)])
      .range([this.chartHeight, 0]);

    chart.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(${this.margins.left}, ${this.chartHeight})`)
      .call(d3.axisBottom(xScale));

    chart.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${this.margins.left}, 0)`)
      .call(d3.axisLeft(yScale));
  }

  makeChart() {
    this.chartWidth = this.width - this.margins.left - this.margins.right;
    this.chartHeight = this.height - this.margins.top - this.margins.bottom;
    const element = this.chartContainer.nativeElement;

    return d3.select(element).append('svg')
      .attr('width', this.width)
      .attr('height', this.height);
  }

  getData(axis: string) {
    if (axis === 'x'){
      return this.data.map(d => d[this.x]);
    } else if (axis === 'y') {
      return this.data.map(d => d[this.y]);
    } else {
      throw Error('Invalid Axis!');
    }
  }
}
