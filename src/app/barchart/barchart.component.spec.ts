/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BarchartComponent } from './barchart.component';
import { ChartService } from '../shared/chart.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BarchartComponent', () => {

  let comp: BarchartComponent;
  let fixture: ComponentFixture<BarchartComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarchartComponent],
      providers: [ChartService]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(BarchartComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;
  }));

  it('should have a div for d3 to target', () => {
    expect(de.query(By.css('div'))).toBeTruthy();
  });

  it('should obtain the axis data correctly', () => {
    comp.data = [{'day': 'monday', 'gold': 123}];
    comp.x = 'day';
    comp.y = 'gold';
    const xData = comp.getData(comp.x);
    const yData = comp.getData(comp.y);

    expect(xData).toEqual(['monday']);
    expect(yData).toEqual([123]);

  });

  it('should default values for some parameters', () => {
    expect(comp.width).toEqual(400);
    expect(comp.height).toEqual(600);
    expect(comp.margins).toEqual({
      'top': 50,
      'right': 50,
      'bottom': 50,
      'left': 50
    });
  });

});
