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
      'day': 'monday',
      'gold': 1000
    },
    {
      'day': 'tuesday',
      'gold': 2000
    }
  ];

  testData2 = [
    {
      'day': 'Jan',
      'gold': 4000
    },
    {
      'day': "Feb",
      'gold': 5500
    }
  ];
}
