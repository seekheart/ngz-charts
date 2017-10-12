import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() {
  }

  /**
   * This is a method to parse out the data to be visualized
   *
   * @param {array} data - data array to extract data from
   * @param {string} dataElement - key data to extract out
   *
   * @return {array} array of data
   */
  getData(data: {}[], dataElement: string): any[] {
    return data.map((d) => d[dataElement]);
  }

}
