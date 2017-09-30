import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BarchartComponent} from './barchart.component';
import {ChartService} from '../shared/chart.service';

describe('BarchartComponent', () => {
  let comp;
  let fixture;
  let de;
  let el;

  class MockChartService {
  }

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [BarchartComponent],
  //   }).compileComponents();
  // }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarchartComponent],
      providers: [{provide: ChartService, useClass: MockChartService}]
    });

    fixture = TestBed.createComponent(BarchartComponent);
    fixture.detectChanges();
    comp = fixture.createComponent(BarchartComponent);
  });

  it('should make a container for my chart', () => {
    expect(comp).toBeTruthy();
  });
});
