import { Component } from '@angular/core';

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
}
