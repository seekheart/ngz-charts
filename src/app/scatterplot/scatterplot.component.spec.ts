import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterplotComponent } from './scatterplot.component';
import { ChartService } from '../shared/chart.service';
import { DataService } from '../shared/data.service';

describe('ScatterplotComponent', () => {
  let component: ScatterplotComponent;
  let fixture: ComponentFixture<ScatterplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScatterplotComponent],
      providers: [ChartService, DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
