import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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
  @Input() margins = {'top': 25, 'right': 50, 'bottom': 25, 'left': 50};
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
      .rangeRound([0, this.chartWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(yData)])
      .rangeRound([this.chartHeight, 0]);

    chart.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${this.chartHeight})`)
      .call(d3.axisBottom(xScale));

    chart.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(yScale));

    chart.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('width', xScale.bandwidth())
      .attr('height', d => this.chartHeight - yScale(d[this.y]))
      .attr('y', d => yScale(d[this.y]))
      .attr('x', d => xScale(d[this.x]));

  }

  makeChart() {
    this.chartWidth = this.width - this.margins.left - this.margins.right;
    this.chartHeight = this.height - this.margins.top - this.margins.bottom;
    const element = this.chartContainer.nativeElement;

    return d3.select(element).append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('class', 'chart-canvas')
      .attr('transform', `translate(${this.margins.left}, ${this.margins.top})`);
  }

  getData(axis: string) {
    if (axis === 'x') {
      return this.data.map(d => d[this.x]);
    } else if (axis === 'y') {
      return this.data.map(d => d[this.y]);
    } else {
      throw Error('Invalid Axis!');
    }
  }
}
