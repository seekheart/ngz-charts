export class Tooltip {
  x: string;
  y: string;
  message: string;

  constructor(xData: string , yData: string, message: string = null) {
    this.x = xData;
    this.y = yData;
    this.message = message;
  }
}
