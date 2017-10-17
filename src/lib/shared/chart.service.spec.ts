/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { async, TestBed } from '@angular/core/testing';
import { ChartService } from './chart.service';
import { MockElementRef } from './models/mock-element-ref';

describe('ChartService', () => {
  let chartService: ChartService;
  let width: number;
  let height: number;
  let margins: {};
  let mockElementRef: MockElementRef;
  let result;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ChartService]
    });
    TestBed.compileComponents();

    chartService = TestBed.get(ChartService);
    height = 300;
    width = 300;
    margins = {'left': 10, 'right': 10, 'top': 10, 'bottom': 10};
    const htmlEl = document.createElement('div');
    mockElementRef = new MockElementRef(htmlEl);
  }));

  it('should create instance of chart service', () => {
    expect(chartService).toBeTruthy('Expected chart service to be created');
  });

  it('should create a d3 chart selection', () => {
    result = chartService.makeChartCanvas(mockElementRef, width, height, margins);
    expect(result).toBeTruthy('Expected chart service to make a canvas');
  });
});
