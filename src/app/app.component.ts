import { Component } from '@angular/core';

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
    },
    {
      'day': 'wednesday',
      'gold': 4500
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
