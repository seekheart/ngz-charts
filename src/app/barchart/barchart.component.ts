import {Component, Input, OnInit} from '@angular/core';
import * as d3 from 'd3';
import 'rxjs/operator/map';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],

})
export class BarchartComponent implements OnInit {

  @Input() data: {}[];
  @Input() params: {};
  @Input() xData: string;
  @Input() yData: string;

  private xScale;
  private yScale;

  constructor() {
  }

  ngOnInit() {

    /*Check if data is given if not die*/
    if (this.data == null) {
      throw new Error('Missing Data!');
    }
    this.draw();
  }

  draw() {

    if (this.params == null) {
      this.params = {
        'width': 900,
        'height': 900,
        'top': 30,
        'right': 20,
        'bottom': 20,
        'left': 20
      };
    }

    const height = this.params['height'];
    const width = this.params['width'];
    const padding = {'top': 30, 'left': 50, 'bottom': 30, 'right': 30};
    this.xScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, (d) => d[this.xData])])
      .range([0, 200]);

    this.yScale = d3.scaleLinear().rangeRound([this.params['height'], 0]);

    /*Draw the canvas first and group chart elements together*/
    const chart = d3.select('.test')
      .append('svg')
      .attr('width', width + this.params['left'] + this.params['right'])
      .attr('height', height + this.params['bottom'] + this.params['top']);
    const g = chart.append('g')
      .attr('transform', `translate(${padding.left}, ${padding.top})`);

    /*Make scales relative to dataset*/
    this.xScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, (d) => {
        return d[this.xData];
        }
      )]).range([0, width]);
    this.yScale.domain([0, d3.max(this.data, (d) => d[this.yData])]);

    /*Draw the axes in*/
    g.append('g').attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(this.xScale));

    g.append('g').attr('class', 'y-axis')
      .call(d3.axisLeft(this.yScale))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'end')
      .text(this.yData);


    /*Draw the data points in to the now ready canvas chart*/
    g.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .data(this.data)
      .attr('class', 'bar')
      .attr('x', (d) => this.xScale(d[this.xData]))
      .attr('y', (d) => this.yScale(d[this.yData]))
      .attr('width', 25)
      .attr('height', (d) => height - this.yScale(d[this.yData]));

  }

}
