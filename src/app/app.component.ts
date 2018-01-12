import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'My name is Scott Zak';
  tagline = "...and I'm a developer!"
  wideScreen = false;
  narrowScreen = true;
  
  ngOnInit() {
    if (window.screen.width > 500) {
      this.wideScreen = true;
      this.narrowScreen = ! this.wideScreen;
    }
  }
}
