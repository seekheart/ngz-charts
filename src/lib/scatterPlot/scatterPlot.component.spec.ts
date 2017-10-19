/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterPlotComponent } from './scatterPlot.component';
import { ChartService } from '../shared/chart.service';
import { DataService } from '../shared/data.service';
import { By } from '@angular/platform-browser';

describe('ScatterPlotComponent', () => {
  let comp: ScatterPlotComponent;
  let fixture: ComponentFixture<ScatterPlotComponent>;
  let de;
  let el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScatterPlotComponent],
      providers: [ChartService, DataService]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(ScatterPlotComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;
    fixture.detectChanges();
  }));

  it('should create a div for d3 to target', () => {
    expect(de.query(By.css('div'))).toBeTruthy();
  });

  it('should default values for scatterPlot chart size', () => {
    expect(comp.width).toEqual(600);
    expect(comp.height).toEqual(600);
    expect(comp.margins).toEqual({
      'top': 50,
      'right': 50,
      'bottom': 50,
      'left': 50
    });
  });
});
