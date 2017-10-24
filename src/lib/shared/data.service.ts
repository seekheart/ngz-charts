/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class DataService {

  constructor() {
  }

  /**
   * This is a method to parse out the data to be visualized
   *
   * @param {array} data - data array to extract data from
   * @param {string} dataElement - key data to extract out
   *
   * @return {array} array of data
   */
  getData(data: {}[], dataElement: string): any[] {
    return data.map((d) => d[dataElement]);
  }

  /**
   * This method creates any kind of d3 scale using builder pattern
   *
   * @param {string} scaleType - scale to make for chart
   * @param {array} data - array of data to build scale against
   * @param {number} measure - measure is the chart dimension to bind to d3.domain()
   *
   * @return {object} d3 scale object
   */
  makeScale(scaleType: string, data: any[], measure: number, ordered: boolean = true) {
    const scaleOptions = {
      'linear': this.makeLinearScale(data, measure, ordered),
      'categorical': this.makeCategoricalScale(data, measure, ordered),
      'time': this.makeTimeScale(data, measure, ordered)
    };

    return scaleOptions[scaleType];
  }

  private makeLinearScale(data: number[], measure: number, ordered: boolean = true) {
    if (ordered) {
      return d3.scaleLinear().domain([0, d3.max(data)]).rangeRound([0, measure]);
    }
    return d3.scaleLinear().domain([0, d3.max(data)]).rangeRound([measure, 0]);
  }

  private makeCategoricalScale(data: any[], measure: number, ordered: boolean = true) {
    if (ordered) {
      return d3.scaleBand().domain(data).rangeRound([0, measure]);
    } else {
      return d3.scaleBand().domain(data).rangeRound([0, measure]);
    }
  }

  private makeTimeScale(data: number[], measure: number, ordered: boolean = true) {
    if (ordered) {
      return d3.scaleTime().domain(d3.extent(data)).rangeRound([0, measure]);
    } else {
      return d3.scaleTime().domain(data).rangeRound([0, measure]);
    }
  }
}
