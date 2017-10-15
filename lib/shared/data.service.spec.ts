import { async, TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service;
  let mockData;
  let fakeMeasure;
  let mockLinearData;
  let mockCategoricalData;
  let result;
  let expected;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });

    TestBed.compileComponents();
    service = TestBed.get(DataService);
    mockData = [{'a': 1, 'b': 2}, {'a': 3, 'b': 3}];
    fakeMeasure = 300;
    mockLinearData = mockData.map(e => e.a);
    mockCategoricalData = ['a', 'b', 'c'];
  }));

  afterEach(() => {
    service = null;
    mockData = null;
    fakeMeasure = null;
    mockLinearData = null;
    mockCategoricalData = null;
    result = null;
    expected = null;
  });

  it('should parse correct data from object array', () => {
    result = service.getData(mockData, 'a');
    expected = [1, 3];

    expect(result).toEqual(expected);
  });

  it('should make the right linear scale', () => {
    result = service.makeScale('linear', mockLinearData, fakeMeasure);
    expect(result).toBeTruthy();
  });

  it('should make the right categorical scale', () => {
    result = service.makeScale('categorical', mockCategoricalData, fakeMeasure);
    expect(result).toBeTruthy();
  });
});
