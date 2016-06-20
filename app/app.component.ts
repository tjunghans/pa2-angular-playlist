
import { Component } from '@angular/core';
import { Config } from './config.service';
import { Video } from './video';
import { VideoListComponent } from './videolist.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ VideoListComponent ]
})
export class AppComponent {
  title: string;
  videos: Array<Video>;

  constructor() {
    this.title = Config.TITLE_PAGE;
    this.videos = [
      new Video(1, 'Test', 'www.test.com', 'Test Description'),
      new Video(2, 'Test 2', 'www.test2.com'),
      new Video(3, 'Test 3', 'www.test2.com')
    ];
  }
}