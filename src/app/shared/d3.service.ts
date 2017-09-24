import * as d3 from 'd3';
import {ElementRef, Injectable} from "@angular/core";

@Injectable()
export class D3Service {
  private element: ElementRef;
  getElementRef(element: ElementRef) {
    this.element = element;
  }
}
