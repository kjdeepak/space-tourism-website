import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'space-tourism-angular';
  backgroundImageLink!: string;

  setBackgroundImage(imageLink: string): void {
    this.backgroundImageLink = imageLink;
  }
}
