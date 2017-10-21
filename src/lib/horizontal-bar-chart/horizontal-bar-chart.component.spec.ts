import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBarChartComponent } from './horizontal-bar-chart.component';
import { DebugElement } from '@angular/core';
import { ChartService } from '../shared/chart.service';
import { DataService } from '../shared/data.service';
import { ToolTipService } from '../shared/tooltip.service';
import { By } from '@angular/platform-browser';

describe('HorizontalBarChartComponent', () => {
  let component: HorizontalBarChartComponent;
  let fixture: ComponentFixture<HorizontalBarChartComponent>;
  let debugEl: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalBarChartComponent],
      providers: [ChartService, DataService, ToolTipService]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(HorizontalBarChartComponent);
    component = fixture.componentInstance;

    debugEl = fixture.debugElement;
    el = fixture.nativeElement;
  }));


  it('should have a div for d3 to target', () => {
    expect(debugEl.query(By.css('div'))).toBeTruthy('expected d3 to have a target');
  });

  it('should default values for horizontalBarChart canvas size', () => {
    expect(component.width).toEqual(400, 'expected 400 as default width');
    expect(component.height).toEqual(400, 'expected 400 as default height');
    expect(component.margins).toEqual({
      'top': 80,
      'right': 80,
      'bottom': 80,
      'left': 80
    }, 'expected default parameters to be 80 for all margins');
  });
});
