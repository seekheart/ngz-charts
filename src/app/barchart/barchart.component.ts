import {
  Component, ElementRef, Input, OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';
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
  @Input() width = 900;
  @Input() height = 900;
  @Input() margins = {'top': 50, 'right': 50, 'bottom': 50, 'left': 50};
  @Input() data: {}[];
  @Input() xData: string;
  @Input() yData: string;

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
    /*TODO: factor making a chart into a service or base component*/
    const chartWidth = this.width - this.margins.left - this.margins.right;
    const chartHeight = this.height - this.margins.top - this.margins.bottom;

    let xDataArray = this.data.map(el => el[this.xData]);
    let yDataArray = [0, d3.max(this.data.map(el => el[this.yData]))];

    const x = d3.scaleBand()
              .domain(xDataArray)
              .rangeRound([0, chartWidth]);
    const y = d3.scaleLinear()
              .domain(yDataArray)
              .range([chartHeight, 0]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    const element = this.chartContainer.nativeElement;

    const chart = d3.select(element)
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight)
      .append('g')
      .attr('transform', `translate(${this.margins.left}, ${this.margins.top})`);

    let chartXAxis = chart.append('g')
                          .attr('class', 'x-axis')
                          .attr('transform', `translate(0, ${chartHeight})`)
                          .call(xAxis);

    let chartYAxis = chart.append('g')
                          .attr('class', 'y-axis')
                          .attr('transform', `translate(0, ${this.margins.top})`)
                          .call(yAxis);

    chart.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d[this.xData]))
      .attr('width', 5)
      .attr('y', d => y(d[this.yData]))
      .attr('height', d => chartHeight);
  }
}
