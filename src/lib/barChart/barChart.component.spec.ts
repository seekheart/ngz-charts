/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BarChartComponent } from './barChart.component';
import { ChartService } from '../shared/chart.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DataService } from '../shared/data.service';
import { ToolTipService } from '../shared/tooltip.service';

describe('BarChartComponent', () => {

  let comp: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartComponent],
      providers: [ChartService, DataService, ToolTipService]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(BarChartComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;
  }));

  it('should have a div for d3 to target', () => {
    expect(de.query(By.css('div'))).toBeTruthy('expected d3 to target and make a selection');
  });


  it('should default values for barChart canvas size', () => {
    expect(comp.width).toEqual(400, 'expected 400 as default width');
    expect(comp.height).toEqual(400, 'expected 400 as default height');
    expect(comp.margins).toEqual({
      'top': 60,
      'right': 60,
      'bottom': 60,
      'left': 60
    }, 'expected default parameters to be {top: 60, right: 60, bottom: 60, left: 60}');
  });

});
