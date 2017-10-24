/**
 * @author Mike Tung <miketung2013@gmail.com>
 * @license
 * Copyright Mike Tung All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';
import { ChartService } from '../shared/chart.service';
import { DataService } from '../shared/data.service';
import { ToolTipService } from '../shared/tooltip.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineComponent],
      providers: [ChartService, DataService, ToolTipService]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    htmlElement = fixture.nativeElement;
  }));


  it('should create a div for d3 to target', () => {
    expect(debugElement.query(By.css('div')))
      .toBeTruthy('expected div for d3 to target');
  });

  it('should default values for timeline canvas size', () => {
    expect(component.width).toEqual(800, 'expected width to be 800');
    expect(component.height).toEqual(400, 'expected height to be 400');
    expect(component.margins).toEqual({'top': 60, 'right': 60, 'bottom': 60, 'left': 60},
      'expected default margins to be 60 across all');
  });
});
