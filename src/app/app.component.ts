import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Spike Angular Admin Tempplate';
  newsItems: any[] = [
    { title: 'News Item 1', content: 'Content of News Item 1...' },
    { title: 'News Item 2', content: 'Content of News Item 2...' },
    { title: 'News Item 3', content: 'Content of News Item 3...' },
    // Add more news items as needed
  ]
}
