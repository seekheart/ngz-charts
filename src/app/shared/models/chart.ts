import {ElementRef} from '@angular/core';

export class Chart {

  constructor(private _width: number, private _height: number, private _element: ElementRef) {
  }


  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get element(): ElementRef {
    return this._element;
  }

  set element(value: ElementRef) {
    this._element = value;
  }
}
