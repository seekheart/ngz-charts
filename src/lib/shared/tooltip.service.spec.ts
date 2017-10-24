/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { async, TestBed } from '@angular/core/testing';
import { MockElementRef } from './models/mock-element-ref';
import * as d3 from 'd3';
import { Tooltip } from './models/tooltip';
import { ToolTipService } from './tooltip.service';

describe('Tooltip service', () => {
  let service;
  let mockElementRef: MockElementRef;
  let mockHtml: HTMLElement;
  let result;
  let expected;
  let tooltip: Tooltip;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ToolTipService]
    });

    TestBed.compileComponents();
    service = TestBed.get(ToolTipService);
    mockElementRef = new MockElementRef(document.createElement('div'));
    mockHtml = mockElementRef.nativeElement;

    tooltip = new Tooltip('x', 'y');
  }));

  afterEach(() => {
    service = null;
    mockElementRef = null;
    result = null;
    expected = null;
  });

  it('it should add a tooltip to the provided selection', () => {
    const selection = d3.select(mockElementRef.nativeElement).append('svg');

    result = service.addTooltip(selection, tooltip, mockHtml);

    expect(result).toBeTruthy('Expected tooltip to be added');
  });

});
