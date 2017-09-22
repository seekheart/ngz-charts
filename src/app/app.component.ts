import { Component } from '@angular/core';
import { BarchartComponent} from './barchart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testData = [
    {
      'day': 1,
      'gold': 1000
    },
    {
      'day': 2,
      'gold': 2000
    }
  ];

  testData2 = [
    {
      'day': 10,
      'gold': 4000
    },
    {
      'day': 12,
      'gold': 5500
    }
  ];
}
