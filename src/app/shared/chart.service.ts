import * as d3 from 'd3';
import {Injectable} from '@angular/core';
import {Chart} from './models/chart';

@Injectable()
export class ChartService {
  chart: Chart;

  makeChartCanvas(chart: Chart, margins: {}): d3.Selection<any, any, any, any> {
    const chartWidth = chart.width - margins['left'] - margins['right'];
    const chartHeight = chart.height - margins['top'] - margins['bottom'];
    const el = chart.element.nativeElement;

    return d3.select(el)
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight)
      .attr('class', 'chart-canvas')
      .attr('transform', `translate(${margins['left']}, ${margins['top']})`);
  }
}
