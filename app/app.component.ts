
import { Component } from '@angular/core';
import { Config } from './config.service';
import { Video } from './video';
import { VideoListComponent } from './videolist.component';
import { VideoDetailComponent } from './videodetail.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ VideoListComponent, VideoDetailComponent ]
})
export class AppComponent {
  title: string;
  videos: Array<Video>;
  selectedVideo: Video;

  constructor() {
    this.title = Config.TITLE_PAGE;
    this.videos = [
      new Video(1, 'Game of Thrones Cast Funny Moments Compilation', 'https://www.youtube.com/embed/fnxEyt570f8', 'Test Description'),
      new Video(2, 'Test 2', 'http://www.example.com'),
      new Video(3, 'Test 3', 'http://www.example.com')
    ];
  }

  onSelectVideo(video: Video) {
    console.log(JSON.stringify(video));
    this.selectedVideo = video;
  }

  onCloseDetailForm(event: any) {
    this.selectedVideo = null;
  }

  newVideo() {
    var v: Video = new Video(this.videos.length + 1, 'A new video', '');
    this.videos.push(v);
    this.selectedVideo = v;
  }
}