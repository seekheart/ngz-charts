import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartComponent } from './barchart.component';
import { ChartService } from '../shared/chart.service';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('BarchartComponent', () => {

  let comp: BarchartComponent;
  let fixture: ComponentFixture<BarchartComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarchartComponent],
      providers: [ChartService]
    }).compileComponents();

    fixture = TestBed.createComponent(BarchartComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;
  }));

  it('should have a div', () => {
    expect(de.query(By.css('div'))).toBeTruthy();
  });

  it('should create a svg chart with data', () => {
    comp.data = [{'day': 'monday', 'gold': 123}];
    comp.x = 'day';
    comp.y = 'gold';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(de.query(By.css('svg'))).toBeTruthy();
    });
  });

  it('one plus one is def 2', () => {
    expect(1 + 1).toBe(2);
  });
});
